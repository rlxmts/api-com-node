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

module.exports = {
    getTodosOsLivros,
    getGetLivroPorId,
    adicionarLivro
}