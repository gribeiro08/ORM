// models/sindico.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Sindico = sequelize.define('Sindico', {
  RG_SINDICO: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  NOME_SINDICO: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  LOGIN_SINDICO: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  SENHA_SINDICO: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'sindicos',
});

module.exports = Sindico;
