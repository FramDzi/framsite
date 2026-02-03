export function listafix(lista, imagens, descricoes = {}) {
    for (const item of lista) {
        const nomeArquivo = item.name.replace(/\//g, '').trim();
        const caminhoImagem = Object.keys(imagens).find(path => path.endsWith(`/${nomeArquivo}.png`));
        if (caminhoImagem) {
            item.pic = imagens[caminhoImagem];
        }
        const caminhoDesc = Object.keys(descricoes).find(path => path.endsWith(`/${nomeArquivo}.svelte`));
        if (caminhoDesc) {
                item.desc = descricoes[caminhoDesc];
            }
        }
    return lista;
}

export function getImg(imagens,nomeParcial) {
        const caminhoEncontrado = Object.keys(imagens).find(path => path.includes(nomeParcial));
        return caminhoEncontrado ? imagens[caminhoEncontrado] : '';
    }