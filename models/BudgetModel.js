const Sequelize = require('sequelize');
const db = require('./db');

const BudgetModel = db.define('quotes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false
    },

    subject: {
        type: Sequelize.STRING,
        allowNull: false
    },

    content: {
        type: Sequelize.TEXT,
        allowNull: false
    }

});


module.exports = BudgetModel;