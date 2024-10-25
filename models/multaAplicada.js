// models/multaAplicada.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const MultaAplicada = sequelize.define('MultaAplicada', {
  ID_MULTA_APLICADA: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ID_MULTA: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ID_MORADOR: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  DATA_APLICACAO: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'multas_aplicadas',
});

module.exports = MultaAplicada;
