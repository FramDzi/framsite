const modules = import.meta.glob('$lib/assets/pics/archetype pics/*.png', { eager: true });

const images = {};
for (const path in modules) {
  const filename = path.split('/').pop().replace('.png', '');
  images[filename] = modules[path].default;
}

const archetypes = [
    {name: "Melodious", type: "MD", desc: "poggers"},
    {name: "Ice Barrier", type: "MD"},
    {name: "Ritual Beast", type: "MD"},
    {name: "Noble Knight", type: ""},
    {name: "Abyss Actor", type: "MD"},
    {name: "Krawler", type: ""},
    {name: "Infernoble Knight", type: "MD"},
    {name: "White Forest", type: "MD"},
    {name: "Voiceless Voice", type: "MD"},
    {name: "Mikanko", type: "MD"},
    {name: "D/D/D", type: "MD"},
    {name: "Speedroid", type: "MD"},
    {name: "", type: ""},
    {name: "", type: ""},
    {name: "", type: ""},
    {name: "", type: ""},
    {name: "", type: ""},
    {name: "", type: ""},
    {name: "", type: ""},
    {name: "", type: ""},
    {name: "", type: ""},
    {name: "", type: ""},
    {name: "", type: ""},
    {name: "", type: ""},
    {name: "", type: ""},
    {name: "", type: ""},
    {name: "", type: ""},
    {name: "", type: ""},
    {name: "", type: ""},
    {name: "", type: ""},
    {name: "", type: ""},
]

archetypes.forEach(archetype => {
  const normalizedName = archetype.name.replace(/\//g, "");
  if (images[normalizedName]) {
    archetype.pic = images[normalizedName]; // Add image path
  }
  else {
    archetype.pic = "";
  }
});



export default archetypes