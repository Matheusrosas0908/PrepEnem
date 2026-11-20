require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { testConnection } = require('./src/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Origens permitidas: configure no .env (separadas por vírgula).
// Inclui sempre o próprio servidor, que também serve o frontend.
const allowedOrigins = new Set(
  (process.env.CORS_ORIGIN || 'http://localhost:8080')
    .split(',')
    .map(origin => origin.trim())
    .filter(Boolean)
);
allowedOrigins.add(`http://localhost:${PORT}`);
allowedOrigins.add(`http://127.0.0.1:${PORT}`);

// Aceita qualquer origem local (localhost/127.0.0.1 em qualquer porta),
// o que cobre o Live Server do VS Code (porta 5500 por padrão) e o próprio servidor.
function isLocalOrigin(origin) {
  if (!origin || origin === 'null') return true; // requisições sem Origin / file://
  try {
    const hostname = new URL(origin).hostname;
    return hostname === 'localhost' || hostname === '127.0.0.1';
  } catch (err) {
    return false;
  }
}

// Middleware
app.use(cors({
  origin: (origin, callback) => {
    return callback(null, isLocalOrigin(origin) || allowedOrigins.has(origin));
  },
  credentials: true,
}));
app.use(express.json());
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ success: false, error: 'JSON inválido.' });
  }
  return next(err);
});
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Routes
const authRoutes = require('./src/routes/auth');
const moduleRoutes = require('./src/routes/modules');
const questionRoutes = require('./src/routes/questions');
const progressRoutes = require('./src/routes/progress');
const healthTipRoutes = require('./src/routes/healthTips');
const rankingRoutes = require('./src/routes/ranking');
const achievementRoutes = require('./src/routes/achievements');
const redacaoRoutes = require('./src/routes/redacao');

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/modules', moduleRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/health-tips', healthTipRoutes);
app.use('/api/ranking', rankingRoutes);
app.use('/api/achievements', achievementRoutes);
app.use('/api/redacao', redacaoRoutes);

// Menu files are kept at the project root rather than in the frontend directory.
app.get('/menu.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'menu.html'));
});
app.get('/menu.css', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'menu.css'));
});
app.get('/menu.js', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'menu.js'));
});

// Compatibilidade com links antigos da página de redação
app.get('/frontend/Redacao.html', (req, res) => res.redirect('/Redacao.html'));
app.get('/frontend/redacao/redacao.html', (req, res) => res.redirect('/Redacao.html'));
app.get('/redacao/redacao.html', (req, res) => res.redirect('/Redacao.html'));
// Compatibilidade com o link antigo da matéria de Inglês
app.get('/frontend/ingles.html', (req, res) => res.redirect('/ingles.html'));

// Health check
app.get('/api/health', async (req, res) => {
  let db = 'ok';
  try {
    await testConnection();
  } catch (err) {
    db = 'error';
  }
  res.json({ status: 'ok', db, message: 'PrepEnem API está rodando' });
});

// Serve frontend for any other route (SPA fallback)
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

// Erros inesperados (inclusive falhas do MySQL) em JSON
app.use((err, req, res, next) => {
  console.error('[ERRO]', err.message);
  if (res.headersSent) return next(err);
  return res.status(500).json({ success: false, error: 'Erro interno do servidor.' });
});

(async () => {
  try {
    await testConnection();
    console.log(`MySQL conectado: ${process.env.DB_NAME || 'prepenem'}`);
  } catch (err) {
    console.error('Falha ao conectar no MySQL:', err.message);
    console.error('Confira DB_HOST / DB_USER / DB_PASSWORD / DB_NAME no backend/.env');
  }

  app.listen(PORT, () => {
    console.log(`PrepEnem Backend rodando na porta ${PORT}`);
    console.log(`API disponível em http://localhost:${PORT}/api`);
  });
})();

module.exports = app;
