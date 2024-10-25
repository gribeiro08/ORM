// models/avisosGerais.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const AvisosGerais = sequelize.define('AvisosGerais', {
  ID_AVISO: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  TITULO_AVISO: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  DESCRICAO_AVISO: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  DATA_AVISO: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'avisos_gerais',
});

module.exports = AvisosGerais;
