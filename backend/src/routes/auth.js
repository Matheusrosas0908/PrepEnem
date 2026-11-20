const express = require('express');
const { findByEmail, create, verifySenha, findById } = require('../data/users');
const { generateToken, authMiddleware } = require('../middleware/auth');

const router = express.Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SENHA_RE = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

function badRequest(res, messages) {
  const msgs = Array.isArray(messages) ? messages : [messages];
  return res.status(400).json({
    success: false,
    error: msgs.join(' '),
    errors: msgs.map(msg => ({ msg })),
  });
}

// POST /api/auth/register
// Body do index.html: { name, email, password, goal, terms }
router.post('/register', async (req, res, next) => {
  const body = req.body || {};
  const nome = String(body.name || body.nome || '').trim();
  const email = String(body.email || '').trim().toLowerCase();
  const senha = body.password || body.senha || '';
  const errors = [];

  if (nome.length < 2) errors.push('Informe seu nome.');
  if (!EMAIL_RE.test(email)) errors.push('Digite um e-mail válido.');
  if (!SENHA_RE.test(String(senha))) errors.push('Use 8 ou mais caracteres, com letras e números.');
  if (body.terms !== undefined && body.terms !== true) errors.push('Aceite os termos para continuar.');

  if (errors.length) return badRequest(res, errors);

  try {
    const user = await create({
      name: nome,
      email,
      password: senha,
      goal: body.goal || 'Enem e Fuvest',
      telefone: body.telefone,
    });

    if (!user) {
      return res.status(409).json({ success: false, error: 'Este e-mail já está cadastrado.' });
    }

    console.log(`[CADASTRO] Usuário salvo no MySQL -> id=${user.id} email=${user.email}`);

    const expiresIn = process.env.JWT_EXPIRES_IN || '7d';
    const token = generateToken(user.id, expiresIn);
    return res.status(201).json({ success: true, user, token, expiresIn });
  } catch (err) {
    return next(err);
  }
});

// POST /api/auth/login
// Body do index.html: { email, password, remember }
router.post('/login', async (req, res, next) => {
  const body = req.body || {};
  const email = String(body.email || '').trim().toLowerCase();
  const senha = body.password || body.senha || '';
  const errors = [];

  if (!EMAIL_RE.test(email)) errors.push('Digite um e-mail válido.');
  if (!senha) errors.push('Digite sua senha.');

  if (errors.length) return badRequest(res, errors);

  try {
    const user = await findByEmail(email);
    if (!user || !verifySenha(String(senha), user.senha)) {
      return res.status(401).json({ success: false, error: 'E-mail ou senha incorretos.' });
    }

    const expiresIn = body.remember === true ? '30d' : '1d';
    const token = generateToken(user.id, expiresIn);
    const { senha: _, ...userWithoutSenha } = user;

    return res.json({ success: true, user: userWithoutSenha, token, expiresIn });
  } catch (err) {
    return next(err);
  }
});

// GET /api/auth/me
router.get('/me', authMiddleware, async (req, res, next) => {
  try {
    const user = await findById(req.userId);
    if (!user) {
      return res.status(404).json({ success: false, error: 'Usuário não encontrado' });
    }
    return res.json({ success: true, user });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
