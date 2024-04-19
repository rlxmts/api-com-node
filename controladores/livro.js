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

        if(id && Number(id)){
            const livro = getGetLivroPorId(id);
            res.send(livro);
        }else{
            res.status(422);
            res.send("ID inválido!")
        }

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

function postLivro( req, res){
    try{
    const livroNovo = req.body

    if( req.body.nome && req.body.id){
        adicionarLivro(livroNovo);
        res.status(201);
        res.send('Adicionado com sucesso!');
    }else{
        res.status(422);
        res.send("Campo 'nome' e campo 'id' obrigatórios");
    }


    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

function pathLivro( req, res) {
     try{
        const id = req.params.id;
        const body = req.body;
        if(id && Number(id)){
            alterarLivro(body, id);
            res.send("Modificado com sucesso!");
            res.status(200);
        }else{
            res.status(422);
            res.send("ID inválido!")
        }
     }catch(error){
        res.status(500);
        res.send(error.message);
     }
}

function deleteLivro( req, res){
    try{
        const id = req.params.id;
        if(id && Number(id)){
            excluiLivro(id);
            res.send("Livro excluído com sucesso!");
        }else{
            res.status(422);
            res.send("ID inválidooo!")
        }

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