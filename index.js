const express = require('express')
const app = express();
const PORT = 3000;

// API entende JSON enviado no corpo das requisições
app.use(express.json());

let livros = [
    {id: 1, titulo: "Jantar Secreto", autor: "Rafael Montes", ano: 2016},
    {id: 2, titulo: "Uma Segunda Chance", autor: "Colleen Hoover", ano: 2022},
    {id: 3, titulo: "Ontem a Noite", autor: "Mhairi McFarlane", ano: 2021},   
];

let proximoId = 4;

// GET /livros -> listar todos
app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});

//GET /livros/id -> buscar um pelo id
app.get('/livros/:id', (req, res) => {
    const id = Number(req.params.id);
    const livro = livros.find((l) => l.id === id);

    if (!livro) {
        return res.status(404).json({ erro: "Livro não encontrado"});
    }
    res.status(200).json(livro);
});

//POST /Livros -> cadastrar
app.post('/livros', (req, res) => {
    const { titulo, autor, ano } = req.body;

    if (!titulo || !autor || !ano) {
        return res
            .status
            .json({erro: "Campos obrigatórios: título, autor e ano"})
    }

    const novoLivro = { id: proximoId++, titulo, autor, ano };
    livros.push(novoLivro);
    res.status(200).json(novoLivro);
});

//PUT /livros /:id -> atualizar
app.put('/livros/:id', (req, res) => {
    const id = Number(req.params.id);
    const livro = livros.find((l) => l.id === id);
    
    if (!livro) {
        return res.status(404).json({ erro: 'Livro não encontrado'});
    }

    livro.titulo = titulo;
    livro.autor = autor;
    livro.ano = ano;
    res.status(200).json(livro);
});

//DELETE /livros /:id -> excluir
app.delete('/livros/:id', (req, res) => {
    const id = Number(req.params.id);
    const indice = livros.findIndex((l) => l.id === id);

    if (!indice === -1) {
        return res.status(404).json({erro: 'Livro não encontrado'});
    }

    livros.splice(indice, 1);
    res.status(200).send();
});

app.listen(PORT, () => {
    console.log (`API rodando em http://localhost:${PORT}`);
});