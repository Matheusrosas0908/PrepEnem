const express = require('express');
const questions = require('../data/questions');

const router = express.Router();

// GET /api/questions/:moduleId/:lessonId - Get questions for a module+lesson
router.get('/:moduleId/:lessonId', (req, res) => {
  const { moduleId, lessonId } = req.params;
  const key = `${moduleId}_lesson${lessonId}`;
  
  const qs = questions[key];
  if (!qs) {
    return res.status(404).json({ 
      success: false, 
      error: `Questões não encontradas para ${key}` 
    });
  }
  
  // Return questions without answer for frontend rendering
  const safeQuestions = qs.map(q => ({
    id: q.id,
    text: q.text,
    options: q.options,
  }));
  
  res.json({ success: true, moduleId, lessonId, questions: safeQuestions });
});

// POST /api/questions/:moduleId/:lessonId/submit - Submit quiz answers
router.post('/:moduleId/:lessonId/submit', (req, res) => {
  const { moduleId, lessonId } = req.params;
  const key = `${moduleId}_lesson${lessonId}`;
  const qs = questions[key];
  
  if (!qs) {
    return res.status(404).json({ 
      success: false, 
      error: `Questões não encontradas para ${key}` 
    });
  }
  
  const { answers } = req.body; // { questionId: chosenAnswer, ... }
  let score = 0;
  const results = qs.map(q => {
    const userAnswer = answers[q.id];
    const isCorrect = userAnswer === q.answer;
    if (isCorrect) score++;
    return {
      id: q.id,
      text: q.text,
      options: q.options,
      answer: q.answer,
      userAnswer,
      isCorrect,
    };
  });
  
  const total = qs.length;
  res.json({
    success: true,
    score,
    total,
    percentage: Math.round((score / total) * 100),
    results,
  });
});

module.exports = router;
