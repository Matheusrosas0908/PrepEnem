const express = require('express');
const { listUsers } = require('../data/users');

const router = express.Router();

// GET /api/ranking - Get user ranking
router.get('/', async (req, res, next) => {
  try {
    const ranking = (await listUsers())
      .sort((a, b) => b.pontos - a.pontos)
      .map((u, index) => ({
        rank: index + 1,
        id: u.id,
        nome: u.nome,
        pontos: u.pontos,
        nivel: u.nivel,
        titulo: u.titulo,
        avatar: u.avatar,
        avatarColor: u.avatarColor,
        horasEstudadas: u.horasEstudadas,
        questionsRespondidas: u.pontos * 3 + 100, // Simulated
        accuracy: 85 + (index * 2), // Simulated
        sequence: Math.floor(Math.random() * 30) + 10, // Simulated
      }));

    return res.json({ success: true, ranking });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
