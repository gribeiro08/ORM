// models/reuniao.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Reuniao = sequelize.define('Reuniao', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  TITULO_REUNIAO: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ASSUNTO_REUNIAO: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  DATA_INICIO_REUNIAO: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  DATA_FIM_REUNIAO: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  LINK_REUNIAO: {
    type: DataTypes.STRING,
  },
  ATA_REUNIAO: {
    type: DataTypes.TEXT,
  },
  SINDICO_RESPONSAVEL_REUNIAO: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'reunioes',
});

module.exports = Reuniao;
