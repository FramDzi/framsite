<script>
	import { base } from '$app/paths';

	let paginas = ['Decks de Ygo'];
</script>

<h1>Framsite 2.0 :d</h1>

<div class="eu-sou-assim">
	<h1>Eu sou literalmente assim ---></h1>
	<img src={`${base}/pics/Echo 6.5.png`} alt="Eu sou assim" style="margin-left: 10px; height: 100%" />
</div>

<div class="caixadepagina-container">
	{#each paginas as paginatitle}
		<a href="{base}/{paginatitle}">
			<div class="caixadepagina">
				<h1 class="titulodepagina">
					{paginatitle}
				</h1>
				<img src={`${base}/pics/つまようじ.png`} class="imagemcaixadepagina" alt="fodase" />
			</div>
		</a>
	{/each}
</div>

<style>
	:global(body) {
		background-image: linear-gradient(to bottom right, rgb(53, 53, 53), rgb(126, 146, 200));
	}

	.eu-sou-assim {
		display: flex;
		align-items: center;
		height: 300px;
	}

	.caixadepagina-container {
		background-color: rgba(65, 65, 65, 0.645);
		border: 2px solid rgb(36, 36, 36);
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: center;
		backdrop-filter: blur(7px);
		border-radius: 10px;
		margin: 10px;
	}

	.caixadepagina {
		border: 2px solid black;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 150px;
		width: 250px;
		background-color: rgba(52, 52, 52, 0.71);
		border-radius: 20px;
		overflow: hidden;
		margin: 10px;
	}

	.titulodepagina {
		text-align: center;
		font-size: 25px;
		text-justify: auto;
		flex-grow: 1;
	}

	.imagemcaixadepagina {
		height: 100%;
		border-left: 2px solid black;
	}
</style>
