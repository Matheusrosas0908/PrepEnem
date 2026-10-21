const express = require('express');

// In-memory challenge store (replace with database in production)
const challenges = [
  {
    id: 'matematica',
    title: 'Maratona de Matemática',
    description: 'Resolva 50 questões de matemática em uma semana',
    difficulty: 'medium',
    points: 500,
    progress: 68,
    participants: 234,
    deadline: '14/02/2026',
    completed: false,
  },
  {
    id: 'sequencia',
    title: 'Sequência de Estudos',
    description: 'Estude por 7 dias consecutivos sem faltar',
    difficulty: 'easy',
    points: 300,
    progress: 100,
    participants: 156,
    deadline: '11/02/2026',
    completed: true,
  },
  {
    id: 'historia',
    title: 'Expert em História',
    description: 'Acerte 90% das questões de História do Brasil',
    difficulty: 'difficult',
    points: 750,
    progress: 25,
    participants: 89,
    deadline: '19/02/2026',
    completed: false,
  },
];

// In-memory achievement store
const achievements = [
  {
    id: 'login',
    title: 'Fidelidade Diária',
    description: 'Faça Login por 7 dias consecutivos.',
    icon: 'fa-star',
    iconColor: '#FBCB0A',
    rewardTitle: 'Aluno Estrela',
    rewardPoints: 700,
    unlocked: true,
  },
  {
    id: 'redacao',
    title: 'Primeiro Rascunho',
    description: 'Envie sua primeira redação para correção.',
    icon: 'fa-pen-fancy',
    iconColor: '#666',
    rewardTitle: 'Redator Júnior',
    rewardPoints: 500,
    unlocked: false,
  },
  {
    id: 'conhecimento',
    title: 'Mente Brilhante',
    description: 'Acerte 200 questões de Módulo em 3 dias.',
    icon: 'fa-brain',
    iconColor: '#666',
    rewardTitle: 'Expert',
    rewardPoints: 1000,
    unlocked: false,
  },
];

const router = express.Router();

// GET /api/achievements - Get all achievements
router.get('/', (req, res) => {
  res.json({ success: true, challenges, achievements });
});

// GET /api/achievements/challenges - Get challenges
router.get('/challenges', (req, res) => {
  res.json({ success: true, challenges });
});

// GET /api/achievements/badges - Get badges
router.get('/badges', (req, res) => {
  res.json({ success: true, achievements });
});

module.exports = router;
