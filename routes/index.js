const express = require('express');
const router = express.Router();

// Importando os controladores
const AcessoController = require('../controller/acessoController');
const FinancaController = require('../controller/financaController');
const ManutencaoController = require('../controller/manutencaoController');
const MoradorController = require('../controller/moradorController');
const MultaController = require('../controller/multaController');
const PorteiroController = require('../controller/porteiroController');
const ReuniaoController = require('../controller/reuniaoController');
const SindicoController = require('../controller/sindicoController');
const VisitanteController = require('../controller/visitanteController');

// Rotas para Acesso
router.post('/acesso', AcessoController.createAcesso);
router.get('/acesso', AcessoController.getAllAcessos);
router.get('/acesso/:id', AcessoController.getAcessoById);
router.put('/acesso/:id', AcessoController.updateAcesso);
router.delete('/acesso/:id', AcessoController.deleteAcesso);

// Rotas para Finança
router.post('/financa', FinancaController.createFinanca);
router.get('/financa', FinancaController.getAllFinancas);
router.get('/financa/:id', FinancaController.getFinancaById);
router.put('/financa/:id', FinancaController.updateFinanca);
router.delete('/financa/:id', FinancaController.deleteFinanca);

// Rotas para Manutenção
router.post('/manutencao', ManutencaoController.createManutencao);
router.get('/manutencao', ManutencaoController.getAllManutencoes);
router.get('/manutencao/:id', ManutencaoController.getManutencaoById);
router.put('/manutencao/:id', ManutencaoController.updateManutencao);
router.delete('/manutencao/:id', ManutencaoController.deleteManutencao);

// Rotas para Morador
router.post('/morador', MoradorController.createMorador);
router.get('/morador', MoradorController.getAllMoradores);
router.get('/morador/:id', MoradorController.getMoradorById);
router.put('/morador/:id', MoradorController.updateMorador);
router.delete('/morador/:id', MoradorController.deleteMorador);

// Rotas para Multa
router.post('/multa', MultaController.createMulta);
router.get('/multa', MultaController.getAllMultas);
router.get('/multa/:id', MultaController.getMultaById);
router.put('/multa/:id', MultaController.updateMulta);
router.delete('/multa/:id', MultaController.deleteMulta);

// Rotas para Porteiro
router.post('/porteiro', PorteiroController.createPorteiro);
router.get('/porteiro', PorteiroController.getAllPorteiros);
router.get('/porteiro/:id', PorteiroController.getPorteiroById);
router.put('/porteiro/:id', PorteiroController.updatePorteiro);
router.delete('/porteiro/:id', PorteiroController.deletePorteiro);

// Rotas para Reunião
router.post('/reuniao', ReuniaoController.createReuniao);
router.get('/reuniao', ReuniaoController.getAllReunioes);
router.get('/reuniao/:id', ReuniaoController.getReuniaoById);
router.put('/reuniao/:id', ReuniaoController.updateReuniao);
router.delete('/reuniao/:id', ReuniaoController.deleteReuniao);

// Rotas para Síndico
router.post('/sindico', SindicoController.createSindico);
router.get('/sindico', SindicoController.getAllSindicos);
router.get('/sindico/:id', SindicoController.getSindicoById);
router.put('/sindico/:id', SindicoController.updateSindico);
router.delete('/sindico/:id', SindicoController.deleteSindico);

// Rotas para Visitante
router.post('/visitante', VisitanteController.createVisitante);
router.get('/visitante', VisitanteController.getAllVisitantes);
router.get('/visitante/:id', VisitanteController.getVisitanteById);
router.put('/visitante/:id', VisitanteController.updateVisitante);
router.delete('/visitante/:id', VisitanteController.deleteVisitante);

// Exportando as rotas
module.exports = router;
