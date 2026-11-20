const express = require('express');
const { authMiddleware } = require('../middleware/auth');
const { modules, lessons, findLesson, findModule } = require('../data/redacao');
const { listCompleted, setCompleted } = require('../data/redacaoProgress');

const router = express.Router();

// O conteúdo das aulas é público; o progresso depende do aluno autenticado.
// Nenhuma aula fica bloqueada, conforme solicitado.

function buildSummary(rows) {
  const completedIds = new Set(rows.map(row => row.lessonId));
  const completedLessons = lessons.filter(lesson => completedIds.has(lesson.id)).length;
  const completedModules = modules.filter(module =>
    module.lessons.every(lesson => completedIds.has(lesson.id))
  ).length;
  const nextLesson = lessons.find(lesson => !completedIds.has(lesson.id)) || null;
  const lastActivity = rows.length
    ? rows.reduce((latest, row) => {
        const date = new Date(row.concluidoEm);
        return !latest || date > latest ? date : latest;
      }, null)
    : null;

  return {
    completedIds,
    progress: {
      totalModules: modules.length,
      totalLessons: lessons.length,
      completedModules,
      completedLessons,
      percent: Math.round((completedLessons / lessons.length) * 100),
      nextLessonId: nextLesson ? nextLesson.id : null,
      lastActivity: lastActivity ? lastActivity.toISOString() : null,
    },
  };
}

function serializeLesson(lesson, summary) {
  const completed = summary.completedIds.has(lesson.id);
  return {
    ...lesson,
    completed,
    status: completed
      ? 'concluida'
      : lesson.id === summary.progress.nextLessonId ? 'atual' : 'nao-iniciada',
    // Tudo liberado, conforme solicitado: o status é apenas informativo.
    unlocked: true,
  };
}

function buildPayload(rows) {
  const summary = buildSummary(rows);
  const datas = new Map(rows.map(row => [row.lessonId, row.concluidoEm]));

  return {
    success: true,
    progress: summary.progress,
    modules: modules.map(module => {
      const done = module.lessons.filter(lesson => summary.completedIds.has(lesson.id)).length;
      const completo = done === module.lessons.length;
      const concluidoEm = module.lessons
        .map(lesson => datas.get(lesson.id))
        .filter(Boolean)
        .map(date => new Date(date).getTime());
      return {
        id: module.id,
        number: module.number,
        title: module.title,
        icon: module.icon,
        color: module.color,
        totalLessons: module.lessons.length,
        completedLessons: done,
        percent: Math.round((done / module.lessons.length) * 100),
        completed: completo,
        completedAt: completo && concluidoEm.length
          ? new Date(Math.max(...concluidoEm)).toISOString()
          : null,
        status: completo ? 'concluido' : done > 0 ? 'em-andamento' : 'nao-iniciado',
        unlocked: true,
        lessons: module.lessons.map(lesson => serializeLesson(lesson, summary)),
      };
    }),
  };
}

// GET /api/redacao/content - conteúdo público, sem exigir login
router.get('/content', (req, res) => {
  res.json(buildPayload([]));
});

// As rotas abaixo precisam de login para ler/salvar o progresso do aluno.
router.use(authMiddleware);

// GET /api/redacao/modules - módulos, aulas e progresso do aluno
router.get('/modules', async (req, res, next) => {
  try {
    const rows = await listCompleted(req.userId);
    res.json(buildPayload(rows));
  } catch (err) {
    next(err);
  }
});

// GET /api/redacao/progress - somente o resumo do progresso
router.get('/progress', async (req, res, next) => {
  try {
    const rows = await listCompleted(req.userId);
    res.json({ success: true, progress: buildSummary(rows).progress });
  } catch (err) {
    next(err);
  }
});

// POST /api/redacao/lessons/:lessonId/complete - marcar/desmarcar aula
router.post('/lessons/:lessonId/complete', async (req, res, next) => {
  const lesson = findLesson(req.params.lessonId);
  if (!lesson) {
    return res.status(404).json({ success: false, error: 'Aula não encontrada.' });
  }

  const completed = req.body && req.body.completed;
  if (typeof completed !== 'boolean') {
    return res.status(400).json({ success: false, error: 'Informe "completed" como true ou false.' });
  }

  try {
    await setCompleted(req.userId, lesson.id, completed);
    const rows = await listCompleted(req.userId);
    res.json({ ...buildPayload(rows), lessonId: lesson.id, completed });
  } catch (err) {
    next(err);
  }
});

// POST /api/redacao/modules/:moduleId/complete - concluir/desfazer um módulo inteiro
router.post('/modules/:moduleId/complete', async (req, res, next) => {
  const module = findModule(req.params.moduleId);
  if (!module) {
    return res.status(404).json({ success: false, error: 'Módulo não encontrado.' });
  }

  const completed = req.body && req.body.completed;
  if (typeof completed !== 'boolean') {
    return res.status(400).json({ success: false, error: 'Informe "completed" como true ou false.' });
  }

  try {
    for (const lesson of module.lessons) {
      await setCompleted(req.userId, lesson.id, completed);
    }
    const rows = await listCompleted(req.userId);
    res.json({ ...buildPayload(rows), moduleId: module.id, completed });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
