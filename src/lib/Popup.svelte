<script>
	import { base } from '$app/paths';

	let { imageUrl, description } = $props();
</script>

<div class="enfeite">
	<p style="margin:10px;">{description}</p>
	<img src={base + imageUrl} style="margin: 10px;" />
</div>

<style>
	.enfeite {
		background-color: rgba(227, 154, 201, 0.662);
		border: 3px solid black;
	}
</style>
