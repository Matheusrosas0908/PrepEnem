const express = require('express');
const { authMiddleware } = require('../middleware/auth');

// In-memory progress store (replace with database in production)
// Structure: { userId: { moduleId: { lessonId: 'completed' | 'current' | 'locked', ... }, ... } }
const userProgress = {};

const router = express.Router();

// GET /api/progress/:moduleId - Get user progress for a module
router.get('/:moduleId', authMiddleware, (req, res) => {
  const { moduleId } = req.params;
  const userId = req.userId;
  
  if (!userProgress[userId]) {
    userProgress[userId] = {};
  }
  
  const progress = userProgress[userId][moduleId] || {};
  // Return progress state
  res.json({ success: true, userId, moduleId, progress });
});

// POST /api/progress/:moduleId - Save user progress for a module
router.post('/:moduleId', authMiddleware, (req, res) => {
  const { moduleId } = req.params;
  const userId = req.userId;
  const { progress, currentLessonId } = req.body;
  
  if (!userProgress[userId]) {
    userProgress[userId] = {};
  }
  
  userProgress[userId][moduleId] = progress || {};
  if (currentLessonId !== undefined) {
    userProgress[userId][`${moduleId}_currentLesson`] = currentLessonId;
  }
  
  // Get user's overall stats
  const users = require('../data/users');
  const user = users.findById(userId);
  
  res.json({ success: true, progress: userProgress[userId][moduleId] });
});

// GET /api/progress - Get all user progress
router.get('/', authMiddleware, (req, res) => {
  const userId = req.userId;
  
  if (!userProgress[userId]) {
    userProgress[userId] = {};
  }
  
  res.json({ success: true, progress: userProgress[userId] });
});

module.exports = router;
