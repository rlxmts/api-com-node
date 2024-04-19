const { getTodosOsLivros, getGetLivroPorId, adicionarLivro, alterarLivro, excluiLivro} = require("../services/livro");

function getLivros(req, res){
    try{
        const livros = getTodosOsLivros();
        res.send( livros );
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

function getLivro(req, res){
    try{
        const id = req.params.id;
        const livro = getGetLivroPorId(id);
        res.send(livro);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

function postLivro( req, res){
    try{
    const livroNovo = req.body
    adicionarLivro(livroNovo);
    res.status(201);
    res.send('Adicionado com sucesso!');

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

function pathLivro( req, res) {
     try{
        const id = req.params.id;
        const body = req.body;
        alterarLivro(body, id);
        res.send("Modificado com sucesso!");
        res.status(200);
     }catch(error){
        res.status(500);
        res.send(error.message);
     }
}

function deleteLivro( req, res){
    try{
        const id = req.params.id;
        excluiLivro(id);
        res.send("Livro excluído com sucesso!");

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}
module.exports = {
    getLivros,
    getLivro,
    postLivro,
    pathLivro,
    deleteLivro
}