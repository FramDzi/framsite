<script>
import { listafix } from '$lib/utils.js';
import meusDecks from '$lib/ygo/archetypes.js';
const imagens = import.meta.glob('$lib/ygo/archetype pics/*.png', { eager: true, query: '?url', import: 'default' });
const descricoes = import.meta.glob('$lib/ygo/archetype desc/*.svelte', { eager: true, import: 'default' });

let archetypes = listafix(meusDecks, imagens, descricoes);


let deckSelecionado = null;
    function abrirPopup(deck) {
        deckSelecionado = deck;
    }
    function fecharPopup() {
        deckSelecionado = null;
    }
</script>

<div class="container">
	<h1 style="margin: 15px; padding: 0px">Decks Favoritos</h1>
</div>

<div class="archetypescontainer">
	{#each archetypes as archetype}
		<button class="archetypebox" on:click={() => abrirPopup(archetype)}>
			<div class="archetypeimagebox">
				<img class="archetypeimage" src={archetype.pic} alt={archetype.name} />
			</div>
			<div class="textinarchetypebox">
				<h1 class="textinarchetypeboxh1">
					{archetype.name}
				</h1>
			</div>
		</button>
	{/each}
</div>

{#if deckSelecionado}
	<div class="popup-fundo" role="button" tabindex="0" on:click|self={fecharPopup} on:keydown|self={(e) => e.key === 'Escape' && fecharPopup()}>
		
		<div class="popup-conteudo">
            <button class="btn-fechar" on:click={fecharPopup}>✖</button>

            <h1 class="popup-titulo">{deckSelecionado.name}</h1>
            
            {#if deckSelecionado.desc}
                <div class="area-descricao">
                    <svelte:component this={deckSelecionado.desc} />
                </div>
            {:else}
                <p>Sem descrição disponível.</p>
            {/if}
        </div>

    </div>
{/if}

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

	.popup-fundo {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(2px);
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .popup-conteudo {
        background: #2a2a2a;
        color: white;
        padding: 30px;
        border-radius: 15px;
        border: 2px solid rgb(91, 129, 210);
        max-width: 800px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
        box-shadow: 0 10px 25px rgba(0,0,0,0.5);
    }

    .btn-fechar {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
    }

    .btn-fechar:hover {
        color: rgb(91, 129, 210);
    }

	.popup-titulo {
		margin-top: 0;
		font-family: 'Comic Sans MS', 'Comic Sans', cursive;
		text-align: center;
	}

	.area-descricao {
		margin-top: 20px;
		font-family: Arial, sans-serif;
		line-height: 1.6;
	}
</style>
