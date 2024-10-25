// models/acesso.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Acesso = sequelize.define('Acesso', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  NOME_ACESSO: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  TIPO_ACESSO: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'acessos',
});

module.exports = Acesso;
