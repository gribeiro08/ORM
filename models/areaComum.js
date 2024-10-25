// models/areaComum.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const AreaComum = sequelize.define('AreaComum', {
  ID_AREA_COMUM: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  NOME_AREA_COMUM: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'areas_comuns',
});

module.exports = AreaComum;
