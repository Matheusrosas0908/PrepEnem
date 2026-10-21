require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:8080';

// Middleware
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Routes
const authRoutes = require('./src/routes/auth');
const moduleRoutes = require('./src/routes/modules');
const questionRoutes = require('./src/routes/questions');
const progressRoutes = require('./src/routes/progress');
const healthTipRoutes = require('./src/routes/healthTips');
const rankingRoutes = require('./src/routes/ranking');
const achievementRoutes = require('./src/routes/achievements');

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/modules', moduleRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/health-tips', healthTipRoutes);
app.use('/api/ranking', rankingRoutes);
app.use('/api/achievements', achievementRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'PrepEnem API está rodando' });
});

// Serve frontend for any other route (SPA fallback)
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'inicio', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`PrepEnem Backend rodando na porta ${PORT}`);
  console.log(`API disponível em http://localhost:${PORT}/api`);
});

module.exports = app;
