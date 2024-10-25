const { Acesso } = require('../models/index');

class AcessoController {
  static async createAcesso(req, res) {
    try {
      const acesso = await Acesso.create(req.body);
      res.status(201).json(acesso);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllAcessos(req, res) {
    try {
      const acessos = await Acesso.findAll();
      res.status(200).json(acessos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAcessoById(req, res) {
    const { id } = req.params;
    try {
      const acesso = await Acesso.findByPk(id);
      if (acesso) {
        res.status(200).json(acesso);
      } else {
        res.status(404).json({ message: 'Acesso não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateAcesso(req, res) {
    const { id } = req.params;
    try {
      const [updated] = await Acesso.update(req.body, { where: { ID_ACESSO: id } });
      if (updated) {
        const updatedAcesso = await Acesso.findByPk(id);
        res.status(200).json(updatedAcesso);
      } else {
        res.status(404).json({ message: 'Acesso não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteAcesso(req, res) {
    const { id } = req.params;
    try {
      const deleted = await Acesso.destroy({ where: { ID_ACESSO: id } });
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Acesso não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = AcessoController;
