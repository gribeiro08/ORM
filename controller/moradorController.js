const { Morador } = require('../models/index');

class MoradorController {
  static async createMorador(req, res) {
    try {
      const morador = await Morador.create(req.body);
      res.status(201).json(morador);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllMoradores(req, res) {
    try {
      const moradores = await Morador.findAll();
      res.status(200).json(moradores);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getMoradorById(req, res) {
    const { id } = req.params;
    try {
      const morador = await Morador.findByPk(id);
      if (morador) {
        res.status(200).json(morador);
      } else {
        res.status(404).json({ message: 'Morador não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateMorador(req, res) {
    const { id } = req.params;
    try {
      const [updated] = await Morador.update(req.body, { where: { ID_MORADOR: id } });
      if (updated) {
        const updatedMorador = await Morador.findByPk(id);
        res.status(200).json(updatedMorador);
      } else {
        res.status(404).json({ message: 'Morador não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteMorador(req, res) {
    const { id } = req.params;
    try {
      const deleted = await Morador.destroy({ where: { ID_MORADOR: id } });
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Morador não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = MoradorController;
