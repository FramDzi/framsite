<script>
	import { base } from '$app/paths';

	let { imageUrl, description } = $props();
</script>

<div class="enfeite">
	<p style="margin:10px;">{description}</p>
	<img src={base + '/gifs/yugioh-arc-v-yu-gi-oh.gif'} style="margin: 10px;" />
</div>

<style>
	.enfeite {
		background-color: rgba(227, 154, 201, 0.662);
		border: 3px solid black;
	}
</style>
