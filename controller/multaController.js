const { Multa } = require('../models/index');

class MultaController {
  static async createMulta(req, res) {
    try {
      const multa = await Multa.create(req.body);
      res.status(201).json(multa);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllMultas(req, res) {
    try {
      const multas = await Multa.findAll();
      res.status(200).json(multas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getMultaById(req, res) {
    const { id } = req.params;
    try {
      const multa = await Multa.findByPk(id);
      if (multa) {
        res.status(200).json(multa);
      } else {
        res.status(404).json({ message: 'Multa não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateMulta(req, res) {
    const { id } = req.params;
    try {
      const [updated] = await Multa.update(req.body, { where: { ID_MULTA: id } });
      if (updated) {
        const updatedMulta = await Multa.findByPk(id);
        res.status(200).json(updatedMulta);
      } else {
        res.status(404).json({ message: 'Multa não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteMulta(req, res) {
    const { id } = req.params;
    try {
      const deleted = await Multa.destroy({ where: { ID_MULTA: id } });
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Multa não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = MultaController;
