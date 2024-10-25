const { Visitante } = require('../models/index');

class VisitanteController {
  static async createVisitante(req, res) {
    try {
      const visitante = await Visitante.create(req.body);
      res.status(201).json(visitante);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllVisitantes(req, res) {
    try {
      const visitantes = await Visitante.findAll();
      res.status(200).json(visitantes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getVisitanteById(req, res) {
    const { id } = req.params;
    try {
      const visitante = await Visitante.findByPk(id);
      if (visitante) {
        res.status(200).json(visitante);
      } else {
        res.status(404).json({ message: 'Visitante não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateVisitante(req, res) {
    const { id } = req.params;
    try {
      const [updated] = await Visitante.update(req.body, { where: { ID_VISITANTE: id } });
      if (updated) {
        const updatedVisitante = await Visitante.findByPk(id);
        res.status(200).json(updatedVisitante);
      } else {
        res.status(404).json({ message: 'Visitante não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteVisitante(req, res) {
    const { id } = req.params;
    try {
      const deleted = await Visitante.destroy({ where: { ID_VISITANTE: id } });
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Visitante não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = VisitanteController;
