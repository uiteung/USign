import { readAsArrayBuffer } from './asyncReader.js';
import { fetchFont, getAsset } from './prepareAssets';
import { noop } from './helper.js';
import {
	PDFDocument,
	PDFImage,
	PDFPage,
	pushGraphicsState,
	setLineCap,
	popGraphicsState,
	setLineJoin,
	LineCapStyle,
	LineJoinStyle, } from 'pdf-lib';
import download from "downloadjs"

interface Object {
	type: string;
	file: Blob;
	x: number;
	y: number;
	width?: number;
	height?: number;
	lines?: string[];
	lineHeight?: number;
	size?: number;
	fontFamily?: string;
	path?: string;
	scale?: number;
}

export async function save(pdfFile: Blob, objects: Object[][], name: string): Promise<void> {
	const makeTextPDF = await getAsset('makeTextPDF');
	let pdfDoc: PDFDocument;
	try {
		pdfDoc = await PDFDocument.load(await readAsArrayBuffer(pdfFile));
	} catch (e) {
		console.log('Failed to load PDF.');
		throw e;
	}
	const pagesProcesses = pdfDoc.getPages().map(async (page: PDFPage, pageIndex: number) => {
		const pageObjects = objects[pageIndex];
		const pageHeight = page.getHeight();
		const embedProcesses = pageObjects.map(async (object) => {
			if (object.type === 'image') {
				const { file, x, y, width = 10, height = 10 } = object;
				let img: PDFImage;
				try {
					if (file.type === 'image/jpeg') {
						img = await pdfDoc.embedJpg(await readAsArrayBuffer(file));
					} else {
						img = await pdfDoc.embedPng(await readAsArrayBuffer(file));
					}
					return () =>
						page.drawImage(img, {
							x,
							y: pageHeight - y - height,
							width,
							height,
						});
				} catch (e) {
					console.log('Failed to embed image.', e);
					return noop;
				}
			} else if (object.type === 'text') {
				let { x, y, lines, lineHeight, size , fontFamily, width } = object;
				const height = size * lineHeight * lines.length;
				const font = await fetchFont(fontFamily);
				const [textPage] = await pdfDoc.embedPdf(
					await makeTextPDF({
						lines,
						fontSize: size,
						lineHeight,
						width,
						height,
						font: font.buffer || fontFamily, // built-in font family
						dy: font.correction(size, lineHeight),
					}),
				);
				return () =>
					page.drawPage(textPage, {
						width,
						height,
						x,
						y: pageHeight - y - height,
					});
			} else if (object.type === 'drawing') {
				const { x, y, path, scale } = object;

				return () => {
					page.pushOperators(
						pushGraphicsState(),
						setLineCap(LineCapStyle.Round),
						setLineJoin(LineJoinStyle.Round),
					);
					page.drawSvgPath(path, {
						borderWidth: 5,
						scale,
						x,
						y: pageHeight - y,
					});
					page.pushOperators(popGraphicsState());
				};
			}
		});
		const drawProcesses = await Promise.all(embedProcesses);
		drawProcesses.forEach((p) => p());
	});
	await Promise.all(pagesProcesses);
	try {
		const pdfBytes = await pdfDoc.save();
		download(pdfBytes, name, 'application/pdf');
	} catch (e) {
		console.log('Failed to save PDF.');
		throw e;
	}
}