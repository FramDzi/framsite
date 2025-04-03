<script>
	import { base } from "$app/paths";
	import echo from "$lib/assets/pics/Echo 6.5.png";
	import ygo from "$lib/assets/pics/つまようじ.png"

let paginas = ["Decks de Ygo", "Animes", "Idk"];
</script>

<link rel="icon" href="Echo 6.5.png">

<div class="flex gap-x-4 p-2">
	<a href="{base}/pagina1">Página 1</a>
	<a href="{base}/pagina2">Página 2 oiiii</a>
</div>


<style>
	:global(body) {
	  background-image: linear-gradient(to bottom right,rgb(53, 53, 53),rgb(126, 146, 200));
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
	  margin: 10px
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
  
	<h1>Framsite 2.0 :d</h1>
  
	<div class = "eu-sou-assim">
	  <h1>Eu sou literalmente assim ---></h1>
	<img src = "{echo}" alt = "Eu sou assim" style="margin-left: 10px; height: 100%">
	</div>
  

	<div class = "caixadepagina-container">
	  {#each paginas as paginatitle}
	  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
	  <div class = "caixadepagina">
		<h1 class = "titulodepagina">
		  {paginatitle}
		</h1>
		<img src = "{ygo}" class = "imagemcaixadepagina" alt = "fodase">
	  </div>
	  </a>
	  {/each}
  </div>
  
  