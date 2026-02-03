<script>
    import archetypes from '$lib/personagens/personagens.js';

    // Variável que guarda qual deck está aberto. Se for null, nada está aberto.
    let deckSelecionado = null;

    function abrirPopup(deck) {
        deckSelecionado = deck;
    }

    function fecharPopup() {
        deckSelecionado = null;
    }
</script>

<div class="archetypescontainer">
    {#each archetypes as archetype}
        <button class="archetypebox" on:click={() => abrirPopup(archetype)}>
            <div class="archetypeimagebox">
                <img class="archetypeimage" src={archetype.pic} alt={archetype.name} />
            </div>
            <div class="textinarchetypebox">
                <h1>{archetype.name}</h1>
            </div>
        </button>
    {/each}
</div>

{#if deckSelecionado}
    <div class="popupbg" on:click|self={fecharPopup} role="button" tabindex="0">
        <div class="popup">
            <button class="btn-fechar" on:click={fecharPopup}>X</button>
            <h1 class="popup-title">{deckSelecionado.name}</h1>
            
            {#if deckSelecionado.desc}
                <svelte:component this={deckSelecionado.desc} />
            {/if}
        </div>
    </div>
{/if}

<style>
    /* ... seus estilos anteriores ... */

    /* Não precisa mais de display:none ou display:flex aqui, o {#if} cuida disso */
    .popupbg {
        /* Fixar na tela toda */
        position: fixed;
        top: 0; left: 0; width: 100vw; height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(2px);
        z-index: 1000;
        /* Centralizar o popup no meio da tela */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .popup {
        /* Removemos os position: fixed daqui, pois o pai (.popupbg) já centraliza com flexbox */
        background: rgba(40, 40, 40, 0.95);
        padding: 20px;
        border-radius: 20px;
        border: 2px solid rgb(91, 129, 210);
        max-width: 90%;
        max-height: 90vh;
        overflow-y: auto; /* Se o texto for grande, cria barra de rolagem */
    }
    
    /* Resetando o botão para parecer sua div antiga */
    button.archetypebox {
        background: none;
        padding: 0;
        cursor: pointer;
        /* herda o resto da sua classe archetypebox */
    }
</style>