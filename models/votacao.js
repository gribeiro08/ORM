// models/votacao.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Votacao = sequelize.define('Votacao', {
  ID_VOTACAO: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  TITULO_VOTACAO: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  DATA_VOTACAO: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'votacoes',
});

module.exports = Votacao;
