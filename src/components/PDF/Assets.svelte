<script lang="js">

	import { onMount } from 'svelte';
	import prepareAssets from '$components/PDF/utils/prepareAssets.js'

	onMount(() => {
		setTimeout(() => {
			prepareAssets();
		}, 5000);
	});

</script>