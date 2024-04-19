const express = require("express");
const rotaLivros = require("./rotas/livro");
const app = express();
const port = 8000;

app.use(express.json());
app.use('/livros', rotaLivros);

app.listen(port, ()=> {
    console.log(`Escutando porta ${port}`);
})