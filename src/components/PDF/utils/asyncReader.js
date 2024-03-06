import { getAsset } from '$components/PDF/utils/prepareAssets';

/**
 * @param {Blob} file
 */
export function readAsArrayBuffer(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}


/**
 * @param {string | Blob } src
 */
export function readAsImage(src) {
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

/**
 * @param {Blob} file
 */
export function readAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/**
 * @param {BlobPart} file
 */
export async function readAsPDF(file) {
  const pdfjsLib = await getAsset('pdfjsLib');
  pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdn.jsdelivr.net/npm/pdfjs-dist@4.0.379/build/pdf.worker.min.mjs";
  // Safari possibly get webkitblobresource error 1 when using origin file blob
  const blob = new Blob([file]);
  const url = window.URL.createObjectURL(blob);
  return pdfjsLib.getDocument(url).promise;
}
