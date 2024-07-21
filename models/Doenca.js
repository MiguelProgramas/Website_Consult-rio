const { DataTypes } = require('sequelize');

const db = require('../db/conn');

const Doenca = db.define('Doenca', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
    sintomas: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
    tratamento: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
});

module.exports = Doenca;