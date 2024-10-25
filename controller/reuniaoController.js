const { Reuniao, Sindico } = require('../models/index');

class ReuniaoController {
  static async createReuniao(req, res) {
    try {
      const reuniao = await Reuniao.create(req.body);
      res.status(201).json(reuniao);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllReunioes(req, res) {
    try {
      const reunioes = await Reuniao.findAll({ include: [Sindico] });
      res.status(200).json(reunioes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getReuniaoById(req, res) {
    const { id } = req.params;
    try {
      const reuniao = await Reuniao.findByPk(id, { include: [Sindico] });
      if (reuniao) {
        res.status(200).json(reuniao);
      } else {
        res.status(404).json({ message: 'Reunião não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateReuniao(req, res) {
    const { id } = req.params;
    try {
      const [updated] = await Reuniao.update(req.body, { where: { ID_REUNIAO: id } });
      if (updated) {
        const updatedReuniao = await Reuniao.findByPk(id);
        res.status(200).json(updatedReuniao);
      } else {
        res.status(404).json({ message: 'Reunião não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteReuniao(req, res) {
    const { id } = req.params;
    try {
      const deleted = await Reuniao.destroy({ where: { ID_REUNIAO: id } });
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Reunião não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ReuniaoController;
