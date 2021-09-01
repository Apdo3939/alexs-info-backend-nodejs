const express = require('express');
const app = express();

const HomeModel = require('./models/HomeModel');

app.get('/', function (req, res) {
    res.send('Hello World!!!');
});

app.listen(8081, () => {
    console.log("Servidor iniciado na porta 8081: http://localhost:8081");
});