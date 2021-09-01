const Sequelize = require('sequelize');

const sequelize = new Sequelize('semanaonze', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize.authenticate()
    .then(() => {
        console.log('Sucesso: Banco de dados conectado!');
    })
    .catch(() => {
        console.log("Erro: banco de dados não conectado!");
    });

module.exports = sequelize;