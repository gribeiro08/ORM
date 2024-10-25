// models/index.js
const sequelize = require('../config/database');
const Sindico = require('./sindico');
const Reuniao = require('./reuniao');
const Financa = require('./financa');
const Acesso = require('./acesso');
const Manutencao = require('./manutencao');
const Porteiro = require('./porteiro');
const Visitante = require('./visitante');
const Morador = require('./morador');
const Multa = require('./multa');
const MultaAplicada = require('./multaAplicada');
const Documento = require('./documento');
const Reserva = require('./reserva');
const AreaComum = require('./areaComum');
const Ocorrencia = require('./ocorrencia');
const Votacao = require('./votacao');
const Voto = require('./voto');
const AvisosGeraisProxy = require('./avisosGeraisProxy');
const AvisosGerais = require('./avisosGerais');
const Advertencia = require('./advertencia');

// Relação Reunião-Síndico
Reuniao.belongsTo(Sindico, { foreignKey: 'SINDICO_RESPONSAVEL_REUNIAO' });
Sindico.hasMany(Reuniao, { foreignKey: 'SINDICO_RESPONSAVEL_REUNIAO' });

// Relação Finança-Síndico
Financa.belongsTo(Sindico, { foreignKey: 'SINDICO_RESPONSAVEL_FINANCA' });
Sindico.hasMany(Financa, { foreignKey: 'SINDICO_RESPONSAVEL_FINANCA' });

// Relação Visitante-Porteiro e Visitante-Morador
Visitante.belongsTo(Morador, { foreignKey: 'MORADOR_RESPONSAVEL' });
Visitante.belongsTo(Porteiro, { foreignKey: 'PORTEIRO_RESPONSAVEL' });
Morador.hasMany(Visitante, { foreignKey: 'MORADOR_RESPONSAVEL' });
Porteiro.hasMany(Visitante, { foreignKey: 'PORTEIRO_RESPONSAVEL' });

// Relação Multa-Multa Aplicada
MultaAplicada.belongsTo(Multa, { foreignKey: 'TIPO_MULTA' });
Multa.hasMany(MultaAplicada, { foreignKey: 'TIPO_MULTA' });

// Relação Área Comum-Reserva
Reserva.belongsTo(AreaComum, { foreignKey: 'AREA_RESERVADA' });
AreaComum.hasMany(Reserva, { foreignKey: 'AREA_RESERVADA' });

// Relação Ocorrência-Morador
Ocorrencia.belongsTo(Morador, { foreignKey: 'MORADOR_SOLICITANTE' });
Morador.hasMany(Ocorrencia, { foreignKey: 'MORADOR_SOLICITANTE' });

// Relação Voto-Votação
Voto.belongsTo(Votacao, { foreignKey: 'VOTACAO_APLICADA' });
Votacao.hasMany(Voto, { foreignKey: 'VOTACAO_APLICADA' });

// Relação Advertência-Morador (Morador advertido)
Advertencia.belongsTo(Morador, { foreignKey: 'APARTAMENTO_ADVERTIDO' });
Morador.hasMany(Advertencia, { foreignKey: 'APARTAMENTO_ADVERTIDO' });  

module.exports = {
  sequelize,
  Sindico,
  Reuniao,
  Financa,
  Acesso,
  Manutencao,
  Porteiro,
  Visitante,
  Morador,
  Multa,
  MultaAplicada,
  Documento,
  Reserva,
  AreaComum,
  Ocorrencia,
  Votacao,
  Voto,
  AvisosGeraisProxy,
  AvisosGerais,
  Advertencia,
};
