// models/financa.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Financa = sequelize.define('Financa', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  CATEGORIA_FINANCA: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  DOCUMENTO_FINANCA: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  OBJETIVO_FINANCA: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  SINDICO_RESPONSAVEL_FINANCA: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'financas',
});

module.exports = Financa;
