// models/multa.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Multa = sequelize.define('Multa', {
  ID_MULTA: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  DESCRICAO_MULTA: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  VALOR_MULTA: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  tableName: 'multas',
});

module.exports = Multa;
