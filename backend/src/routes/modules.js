const express = require('express');
const modules = require('../data/modules');

const router = express.Router();

// GET /api/modules - List all modules
router.get('/', (req, res) => {
  const moduleList = modules.map(m => ({
    id: m.id,
    name: m.name,
    subtitle: m.subtitle,
    icon: m.icon,
    colorClass: m.colorClass,
    totalLessons: m.totalLessons,
  }));
  res.json({ success: true, modules: moduleList });
});

// GET /api/modules/:moduleId - Get specific module details
router.get('/:moduleId', (req, res) => {
  const { moduleId } = req.params;
  const module = modules.find(m => m.id === moduleId);
  if (!module) {
    return res.status(404).json({ success: false, error: 'Módulo não encontrado' });
  }
  res.json({ success: true, module });
});

// GET /api/modules/:moduleId/lessons - Get lessons for a module
router.get('/:moduleId/lessons', (req, res) => {
  const { moduleId } = req.params;
  const module = modules.find(m => m.id === moduleId);
  if (!module) {
    return res.status(404).json({ success: false, error: 'Módulo não encontrado' });
  }
  res.json({ success: true, moduleId: module.id, lessons: module.lessons });
});

// GET /api/modules/:moduleId/lessons/:lessonId - Get specific lesson
router.get('/:moduleId/lessons/:lessonId', (req, res) => {
  const { moduleId, lessonId } = req.params;
  const module = modules.find(m => m.id === moduleId);
  if (!module) {
    return res.status(404).json({ success: false, error: 'Módulo não encontrado' });
  }
  const lesson = module.lessons.find(l => l.id === parseInt(lessonId));
  if (!lesson) {
    return res.status(404).json({ success: false, error: 'Aula não encontrada' });
  }
  res.json({ success: true, lesson });
});

module.exports = router;
