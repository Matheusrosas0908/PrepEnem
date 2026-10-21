const express = require('express');
const { healthTips, allTips } = require('../data/healthTips');

const router = express.Router();

// GET /api/health-tips - Get all health tips
router.get('/', (req, res) => {
  res.json({ success: true, tips: allTips });
});

// GET /api/health-tips/:tipId - Get a specific health tip
router.get('/:tipId', (req, res) => {
  const { tipId } = req.params;
  const tip = healthTips[tipId];
  if (!tip) {
    return res.status(404).json({ success: false, error: 'Dica não encontrada' });
  }
  res.json({ success: true, tip });
});

module.exports = router;
