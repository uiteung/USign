import {base} from '$app/paths';

const scripts = [
	{
		name: 'pdfjsLib',
		module: true,
		src: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.0.379/build/pdf.min.mjs'
	},
	{
		name: 'PDFLib',
		module: false,
		src: 'https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js'
	},
	{
		name: 'download',
		module: false,
		src: 'https://cdn.jsdelivr.net/npm/downloadjs@1.4.7/download.min.js'
	},
	{
		name: 'makeTextPDF',
		module: false,
		src: base + '/makeTextPDF.js'
	}
];

/**
 * @type {Object.<string, Promise<HTMLScriptElement>>}
 */

const assets = {};

/**
 * @param {string} name
 */
export async function getAsset(name) {
	if (await assets[name]) return assets[name];
	const script = scripts.find((s) => s.name === name);
	if (!script) throw new Error(`Script ${name} not exists.`);
	return prepareAsset(script);
}

/**
 * @param {Object} asset
 * @param {String} asset.name
 * @param {String} asset.src
 * @param {Boolean} asset.module
 * @return {Promise<HTMLScriptElement>}
 */
export async function prepareAsset({ name, src, module }) {
	if (await assets[name]) return assets[name];
	assets[name] = new Promise((resolve, reject) => {
		const script = document.createElement('script');
		if (module) script.type = 'module';
		script.src = src;
		script.onload = () => {
			// @ts-ignore
			resolve(window[name]);
			console.log(`${name} is loaded.`);
		};
		script.onerror = () => {
			reject(`The script ${name} didn't load correctly.`);
			alert(`Some scripts did not load correctly. Please reload and try again.`);
		};
		document.body.appendChild(script);
	});
	return assets[name];
}

export default function prepareAssets() {
	Promise.all(scripts.map(prepareAsset));
}

// out of the box fonts
const fonts = {
	'Courier': {
		/**
         * @param {number} size
         * @param {number} lineHeight
         */
		correction(size, lineHeight) {
			return (size * lineHeight - size) / 2 + size / 6;
		}
	},
	'Helvetica': {
		/**
		 * @param {number} size
		 * @param {number} lineHeight
		 */
		correction(size, lineHeight) {
			return (size * lineHeight - size) / 2 + size / 10;
		}
	},
	'Times-Roman': {
		/**
		 * @param {number} size
		 * @param {number} lineHeight
		 */
		correction(size, lineHeight) {
			return (size * lineHeight - size) / 2 + size / 7;
		}
	}
};
// Available fonts
export const Fonts = {
	...fonts,
	'標楷體': {
		src: '/CK.ttf', // 9.9 MB
		/**
		 * @param {number} size
		 * @param {number} lineHeight
		 */
		correction(size, lineHeight) {
			return (size * lineHeight - size) / 2;
		}
	}
};

// @ts-expect-error error if font not found
export function fetchFont(name) {
	if (fonts[name]) return fonts[name];
	const font = Fonts[name];
	if (!font) throw new Error(`Font '${name}' not exists.`);
	fonts[name] = fetch(font.src)
		.then((r) => r.arrayBuffer())
		.then((fontBuffer) => {
			const fontFace = new FontFace(name, fontBuffer);
			fontFace.display = 'swap';
			fontFace.load().then(() => document.fonts.add(fontFace));
			return {
				...font,
				buffer: fontBuffer
			};
		});
	return fonts[name];
}
