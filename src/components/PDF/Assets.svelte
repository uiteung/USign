<script lang="js">

	import { onMount } from 'svelte';
	import prepareAssets from './utils/prepareAssets.js'

	onMount(() => {
		setTimeout(() => {
			prepareAssets();
		}, 5000);
	});

</script>