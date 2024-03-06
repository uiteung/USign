<script lang="ts">
	import { FileHandler } from '$lib/file';

	import Pdf from '$components/Pdf.svelte';

	import Editor from '$components/PDF/editor/App.svelte';

	import Swal from 'sweetalert2';

	import { Modal } from 'flowbite-svelte';


	let showPdf: boolean = false;

	let files: FileList;
	let encodedPdf: Uint8Array;

	const uploadFile = (event: Event) => {
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

<!--<form on:submit={uploadFile}>-->
<!--	<label for="filePdf">Upload File PDF</label>-->
<!--	<input accept="application/pdf" id="filePdf" name="filePdf" type="file" bind:files />-->
<!--	<button type="submit">Submit File</button>-->
<!--</form>-->

<!--<Modal title="PDF Viewer" bind:open={showPdf} autoclose>-->
<!--	<Pdf fileBytes={encodedPdf} scalePdf={0.9} />-->
<!--</Modal>-->

<Editor />

