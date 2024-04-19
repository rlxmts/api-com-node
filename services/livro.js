const fs = require("fs");

function getTodosOsLivros() {
    return JSON.parse( fs.readFileSync("livros.json"))
}

function getGetLivroPorId(id) {
    const listaDeLivros = JSON.parse( fs.readFileSync("livros.json"));
    const livroFiltrado = listaDeLivros.filter( livro => livro.id === id);
    return livroFiltrado;
}

function adicionarLivro(livro){
    const listaDeLivros = JSON.parse( fs.readFileSync("livros.json"));
    const listaNova = [...listaDeLivros, livro];
    fs.writeFileSync( "livros.json", JSON.stringify(listaNova));
}

function alterarLivro(modificacao, id){
    const listaDeLivros = JSON.parse( fs.readFileSync("livros.json"));
    const indiceModificado = listaDeLivros.findIndex( livro => livro.id === id);
    const listaModificada = {...listaDeLivros[indiceModificado], ...modificacao};
    listaDeLivros[indiceModificado] = listaModificada;
    fs.writeFileSync("livros.json", JSON.stringify(listaDeLivros) );
}   

function excluiLivro(id){
    const listaDeLivros = JSON.parse( fs.readFileSync("livros.json"));
    const listaFiltrada = listaDeLivros.filter( livro => livro.id !== id);
    fs.writeFileSync( "livros.json", JSON.stringify(listaFiltrada));
} 

module.exports = {
    getTodosOsLivros,
    getGetLivroPorId,
    adicionarLivro,
    alterarLivro,
    excluiLivro
}