const { Financa, Sindico } = require('../models/index');

class FinancaController {
  static async createFinanca(req, res) {
    try {
      const financa = await Financa.create(req.body);
      res.status(201).json(financa);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllFinancas(req, res) {
    try {
      const financas = await Financa.findAll({ include: [Sindico] });
      res.status(200).json(financas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getFinancaById(req, res) {
    const { id } = req.params;
    try {
      const financa = await Financa.findByPk(id, { include: [Sindico] });
      if (financa) {
        res.status(200).json(financa);
      } else {
        res.status(404).json({ message: 'Finança não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateFinanca(req, res) {
    const { id } = req.params;
    try {
      const [updated] = await Financa.update(req.body, { where: { ID_FINANCA: id } });
      if (updated) {
        const updatedFinanca = await Financa.findByPk(id);
        res.status(200).json(updatedFinanca);
      } else {
        res.status(404).json({ message: 'Finança não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteFinanca(req, res) {
    const { id } = req.params;
    try {
      const deleted = await Financa.destroy({ where: { ID_FINANCA: id } });
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Finança não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = FinancaController;
