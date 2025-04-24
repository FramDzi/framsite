// const modules = import.meta.glob('$lib/assets/ygo/archetype pics/*.png', { eager: true });
const modulesdesc = import.meta.glob('$lib/assets/ygo/archetype desc/*.svelte', { eager : true });

// const images = {};
// for (const path in modules) {
// 	const filename = path.split('/').pop().replace('.png', '');
// 	images[filename] = modules[path].default;
// }

console.log(modulesdesc);
const desc = {};
for (const path in modulesdesc) {
	const filename = path.split('/').pop().replace('.svelte', '');
	desc[filename] = modulesdesc[path].default;
}

const archetypes = [
	{ name: 'Melodious', type: 'MD'},
	{ name: 'Ice Barrier', type: 'MD'},
	{ name: 'Ritual Beast', type: 'MD' },
	{ name: 'Noble Knight', type: '' },
	{ name: 'Abyss Actor', type: 'MD' },
	{ name: 'Krawler', type: '' },
	{ name: 'Infernoble Knight', type: 'MD' },
	{ name: 'White Forest', type: 'MD' },
	{ name: 'Voiceless Voice', type: 'MD' },
	{ name: 'Mikanko', type: 'MD' },
	{ name: 'D/D/D', type: 'MD' },
	{ name: 'Speedroid', type: 'MD' },
	{ name: '', type: '' },
	{ name: '', type: '' },
	{ name: '', type: '' },
	{ name: '', type: '' },
	{ name: '', type: '' },
	{ name: '', type: '' },
	{ name: '', type: '' },
	{ name: '', type: '' },
	{ name: '', type: '' },
	{ name: '', type: '' },
	{ name: '', type: '' },
	{ name: '', type: '' },
	{ name: '', type: '' },
	{ name: '', type: '' },
	{ name: '', type: '' },
	{ name: '', type: '' },
	{ name: '', type: '' },
	{ name: '', type: '' },
	{ name: '', type: '' }
];

for (const archetype of archetypes) {
	let normName = archetype.name.replace(/\//g, '');
	archetype.pic = "src/lib/assets/ygo/archetype pics/"+normName+".png";
}


// archetypes.forEach((archetype) => {
// 	const normalizedName = archetype.name.replace(/\//g, '');
// 	if (images[normalizedName]) {
// 		archetype.pic = images[normalizedName]; // Add image path
// 	} else {
// 		archetype.pic = '';
// 	}
// });


// archetypes.forEach((archetype) => {
// 		archetype.pic = "src/lib/assets/ygo/archetype pics/"+archetype.name+".png";
// 	}
// );


archetypes.forEach((archetype) => {
	const normalizedName = archetype.name.replace(/\//g, '');
	if (desc[normalizedName]) {
		archetype.desc = desc[normalizedName]; // Add image path
	} else {
		archetype.desc = '';
	}
});

// console.log(desc);

export default archetypes;
