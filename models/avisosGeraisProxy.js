// models/avisosGeraisProxy.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const AvisosGeraisProxy = sequelize.define('AvisosGeraisProxy', {
  ID_AVISO: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  TIPO_AVISO: {
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
  tableName: 'avisos_gerais_proxy',
});

module.exports = AvisosGeraisProxy;
