<script lang="ts">
	import { FileHandler } from '$lib/file';

	import Pdf from './Pdf.svelte';

	import Swal from 'sweetalert2';

	// import {PDFDocument} from "pdf-lib";

	let showPdf: boolean = false;

	let files: FileList;
	let encodedPdf: Uint8Array;

	const uploadFile = async (event: Event) => {
		event.preventDefault();
		FileHandler(files[0])
			.then((file) => {
				file.match({
					some: (file) => {
						console.log(file);
						encodedPdf = new Uint8Array(file);
					},
					none: () => {
						throw new Error('File not found');
					}
				});
			})
			.then(() => {
				showPdf = true;
			})
			.catch((error) => {
				Swal.fire({
					title: 'Error',
					text: error.message,
					icon: 'error'
				});
			});
	};
</script>

<form on:submit={uploadFile}>
	<label for="filePdf">Upload File PDF</label>
	<input accept="application/pdf" id="filePdf" name="filePdf" type="file" bind:files />
	<button type="submit">Submit File</button>
</form>

{#if showPdf}
	<Pdf fileBytes={encodedPdf} />
{/if}
