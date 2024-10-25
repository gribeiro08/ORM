const { Manutencao, Morador } = require('../models/index');

class ManutencaoController {
  static async createManutencao(req, res) {
    try {
      const manutencao = await Manutencao.create(req.body);
      res.status(201).json(manutencao);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllManutencoes(req, res) {
    try {
      const manutencoes = await Manutencao.findAll({ include: [Morador] });
      res.status(200).json(manutencoes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getManutencaoById(req, res) {
    const { id } = req.params;
    try {
      const manutencao = await Manutencao.findByPk(id, { include: [Morador] });
      if (manutencao) {
        res.status(200).json(manutencao);
      } else {
        res.status(404).json({ message: 'Manutenção não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateManutencao(req, res) {
    const { id } = req.params;
    try {
      const [updated] = await Manutencao.update(req.body, { where: { ID_MANUTENCAO: id } });
      if (updated) {
        const updatedManutencao = await Manutencao.findByPk(id);
        res.status(200).json(updatedManutencao);
      } else {
        res.status(404).json({ message: 'Manutenção não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteManutencao(req, res) {
    const { id } = req.params;
    try {
      const deleted = await Manutencao.destroy({ where: { ID_MANUTENCAO: id } });
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Manutenção não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ManutencaoController;
