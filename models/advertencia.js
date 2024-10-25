// models/advertencia.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Advertencia = sequelize.define('Advertencia', {
  ID_ADVERTENCIA: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  DESCRICAO_ADVERTENCIA: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ID_MORADOR: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'advertencias',
});

module.exports = Advertencia;
