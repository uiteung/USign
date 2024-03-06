<script lang="ts">
	import PdfViewer from 'svelte-pdf';

	export let fileBytes: Uint8Array;
	export let showBorder: boolean = false;

	export let scalePdf: number = 1.0;
</script>

<PdfViewer url="" data={fileBytes} {showBorder} scale={scalePdf} />
