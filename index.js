const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!!!');
});

app.listen(8081, () => {
    console.log("Servidor iniciado na porta 8081: http://localhost:8081");
});