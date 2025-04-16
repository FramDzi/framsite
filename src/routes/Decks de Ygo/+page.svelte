<script>
	import { base } from '$app/paths';

	import Popup from '$lib/Popup.svelte';
	import archetypes from './archetypes.js';

	let currentpopup = '';
	function closepopup(event) {
		// If event is undefined, allow the function to close the popup (like from a button)
		// Otherwise, only close if the click happened outside the popup content.
		if (event) {
			var popupContent = document.getElementById('popup' + currentpopup);
			if (popupContent.contains(event.target)) {
				// Click occurred inside the popup; do nothing.
				return;
			}
		}
		document.getElementById(currentpopup).style.display = 'none';

		document.removeEventListener('click', closepopup);
	}

	function popup(name) {
		event.stopPropagation();
		// Displays popup with id name
		document.getElementById(name).style.display = 'block';
		document.addEventListener('click', closepopup);
		currentpopup = name;
	}
</script>

<div class="container">
	<h1 style="margin: 15px; padding: 0px">Decks Favoritos</h1>
</div>

<div class="archetypescontainer">
	{#each archetypes as archetype}
		<div class="archetypebox" on:click={() => popup(archetype.name)}>
			<div class="archetypeimagebox">
				<img class="archetypeimage" src={base + archetype.image} alt={archetype.name} />
			</div>
			<div class="textinarchetypebox">
				<h1 class="textinarchetypeboxh1">
					{archetype.name}
				</h1>
			</div>
		</div>
	{/each}
</div>

{#each archetypes as archetype}
	<div class="popupbg" id={archetype.name}>
		<div class="popup" id={'popup' + archetype.name}>
			<h1 class="popup-title">{archetype.name}</h1>
			{#if archetype.description}
				<Popup imageUrl="{archetype.description.image}" description={archetype.description.text} />
			{/if}
		</div>
	</div>
{/each}

<style>
	.archetypescontainer {
		background-color: rgba(65, 65, 65, 0.645);
		border: 2px solid rgb(36, 36, 36);
		box-shadow: 4px 4px 2px rgb(100, 143, 159);
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: center;
		backdrop-filter: blur(7px);
		border-radius: 10px;
	}

	.archetypebox {
		height: 300px;
		width: 200px;
		margin: 10px;
		display: flex;
		flex-direction: column;
		transition: transform 0.3s ease;
		border: 3px solid rgb(91, 129, 210);
		background-color: rgba(26, 26, 26, 0.621);
		border-radius: 20px;
		overflow: hidden;
	}

	.archetypebox:hover {
		transform: scale(1.2);
	}

	.textinarchetypebox {
		display: flex;
		justify-content: center;
		align-items: center;
		border-top: 3px solid rgb(91, 129, 210);
		color: white;
		font-family: 'Comic Sans MS', 'Comic Sans', cursive;
		margin-top: -2px;
		flex-grow: 1;
		min-height: 0;
		backdrop-filter: blur(10px);
		font-size: 10px;
	}

	.textinarchetypeboxh1 {
		display: flex;
		height: 100%;
		margin: 0;
		padding: 0;
		align-items: center;
		text-align: center;
	}

	.archetypeimagebox {
		position: relative;
		width: 100%;
		height: 0;
		padding-bottom: 100%;
	}

	.archetypeimage {
		width: 100%;
	}

	.container {
		display: flex;
		border: 3px solid rgba(26, 26, 26, 0.621);
		margin-bottom: 10px;
		justify-content: center;
		background-color: rgba(11, 133, 133, 0.826);
		backdrop-filter: blur(10px);
		font-family: 'Comic Sans MS', 'Comic Sans', cursive;
		font-size: 30px;
	}

	.popup {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: rgba(109, 109, 109, 0.933);
		backdrop-filter: blur(10px);
		padding: 20px;
		box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
		border-radius: 20px;
		z-index: 1000;
		border: 2px solid black;
		display: flex;
		flex-direction: column;
	}

	.popupbg {
		background: rgba(0, 0, 0, 0.136);
		backdrop-filter: blur(1px);
		color: antiquewhite;
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 1000; /* Lower than popup if popup has a higher z-index */
	}

	.popup-title {
		text-align: center;
	}
</style>
