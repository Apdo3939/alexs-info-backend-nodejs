const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const HomeModel = require('./models/HomeModel');
const BudgetModel = require('./models/BudgetModel');

app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, 'public', 'upload')));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type, Authorization');
    app.use(cors());
    next();
});


app.get('/', async (req, res) => {
    await HomeModel.findOne()
        .then((data) => {
            return res.json({
                error: false,
                data,
                url: 'http://localhost:8081/files/home/',
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

app.post('/contact', async (req, res) => {
    return res.json({
        error: false,
        message: 'Orçamento realizado com sucesso!'
    });
});

app.listen(8081, () => {
    console.log("Servidor iniciado na porta 8081: http://localhost:8081");
});