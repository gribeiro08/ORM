// models/morador.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Morador = sequelize.define('Morador', {
  ID_MORADOR: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  NOME_MORADOR: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  DOCUMENTO_MORADOR: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  APARTAMENTO_MORADOR: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'moradores',
});

module.exports = Morador;
