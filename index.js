const express = require('express');
const app = express();

const HomeModel = require('./models/HomeModel');

app.use(express.json());

app.get('/', async (req, res) => {
    await HomeModel.findOne()
        .then((data) => {
            return res.json({
                error: false,
                data,
                message: 'Arquivo encontrado!'
            });
        })
        .catch(() => {
            return res.status(400).json({
                error: true,
                message: 'Erro: Arquivo não encontrado!'
            });
        });
});

app.post('/create', async (req, res) => {
    await HomeModel.create(req.body)
        .then(() => {
            return res.json({
                error: false,
                message: 'Cadastrado com sucesso!'
            });
        })
        .catch(() => {
            return res.status(400).json({
                error: true,
                message: 'Erro: Não cadastrado!'
            });
        });

    res.send('Hello World!!!');
});

app.listen(8081, () => {
    console.log("Servidor iniciado na porta 8081: http://localhost:8081");
});