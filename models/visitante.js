// models/visitante.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Visitante = sequelize.define('Visitante', {
  ID_VISITANTE: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  NOME_VISITANTE: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  DOCUMENTO_VISITANTE: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'visitantes',
});

module.exports = Visitante;
