import type { PDFDocumentProxy} from 'pdfjs-dist';
import {getDocument} from 'pdfjs-dist';

export const readAsArrayBuffer = (file: Blob): Promise<ArrayBuffer | string> =>  {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(reader.result as ArrayBuffer);
		reader.onerror = reject;
		reader.readAsArrayBuffer(file);
	});

}

export function readAsImage(src: string | Blob): Promise<HTMLImageElement> {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => resolve(img);
		img.onerror = reject;
		if (src instanceof Blob) {
			img.src = window.URL.createObjectURL(src);
		} else {
			img.src = src;
		}
	});
}

export function readAsDataURL(file: Blob): Promise<string> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(reader.result as string);
		reader.onerror = reject;
		reader.readAsDataURL(file);
	});
}

export async function readAsPDF(file: Blob): Promise<PDFDocumentProxy> {
	// Safari possibly get webkitblobresource error 1 when using origin file blob
	const blob = new Blob([file]);
	const url = window.URL.createObjectURL(blob);
	return getDocument(url).promise;
}