const { Porteiro } = require('../models/index');

class PorteiroController {
  static async createPorteiro(req, res) {
    try {
      const porteiro = await Porteiro.create(req.body);
      res.status(201).json(porteiro);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllPorteiros(req, res) {
    try {
      const porteiros = await Porteiro.findAll();
      res.status(200).json(porteiros);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getPorteiroById(req, res) {
    const { id } = req.params;
    try {
      const porteiro = await Porteiro.findByPk(id);
      if (porteiro) {
        res.status(200).json(porteiro);
      } else {
        res.status(404).json({ message: 'Porteiro não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updatePorteiro(req, res) {
    const { id } = req.params;
    try {
      const [updated] = await Porteiro.update(req.body, { where: { ID_PORTEIRO: id } });
      if (updated) {
        const updatedPorteiro = await Porteiro.findByPk(id);
        res.status(200).json(updatedPorteiro);
      } else {
        res.status(404).json({ message: 'Porteiro não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deletePorteiro(req, res) {
    const { id } = req.params;
    try {
      const deleted = await Porteiro.destroy({ where: { ID_PORTEIRO: id } });
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Porteiro não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = PorteiroController;
