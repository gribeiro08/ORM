// models/manutencao.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Manutencao = sequelize.define('Manutencao', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  DESCRICAO_MANUTENCAO: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  DATA_MANUTENCAO: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  STATUS_MANUTENCAO: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'manutencoes',
});

module.exports = Manutencao;
