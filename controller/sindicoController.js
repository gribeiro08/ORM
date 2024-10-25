const { Sindico, Reuniao, Financa } = require('../models/index');

class SindicoController {
  // Criar um novo síndico
  static async createSindico(req, res) {
    try {
      const sindico = await Sindico.create(req.body);
      res.status(201).json(sindico);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Obter todos os síndicos
  static async getAllSindicos(req, res) {
    try {
      const sindicos = await Sindico.findAll({ include: [Reuniao, Financa] });
      res.status(200).json(sindicos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Obter um síndico pelo ID
  static async getSindicoById(req, res) {
    const { id } = req.params;
    try {
      const sindico = await Sindico.findByPk(id, { include: [Reuniao, Financa] });
      if (sindico) {
        res.status(200).json(sindico);
      } else {
        res.status(404).json({ message: 'Síndico não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Atualizar um síndico
  static async updateSindico(req, res) {
    const { id } = req.params;
    try {
      const [updated] = await Sindico.update(req.body, { where: { RG_SINDICO: id } });
      if (updated) {
        const updatedSindico = await Sindico.findByPk(id);
        res.status(200).json(updatedSindico);
      } else {
        res.status(404).json({ message: 'Síndico não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Excluir um síndico
  static async deleteSindico(req, res) {
    const { id } = req.params;
    try {
      const deleted = await Sindico.destroy({ where: { RG_SINDICO: id } });
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Síndico não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = SindicoController;
