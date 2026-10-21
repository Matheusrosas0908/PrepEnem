const express = require('express');
const { body, validationResult } = require('express-validator');
const { findByEmail, create, verifySenha, findById } = require('../data/users');
const { generateToken } = require('../middleware/auth');

const router = express.Router();

// POST /api/auth/register
router.post('/register', [
  body('nome').notEmpty().withMessage('Nome é obrigatório'),
  body('email').isEmail().withMessage('Email inválido'),
  body('senha').isLength({ min: 6 }).withMessage('Senha deve ter pelo menos 6 caracteres'),
  body('telefone').notEmpty().withMessage('Telefone é obrigatório'),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const { nome, email, senha, telefone } = req.body;
  const user = create(nome, email, senha, telefone);

  if (!user) {
    return res.status(409).json({ success: false, error: 'Email já cadastrado' });
  }

  const token = generateToken(user.id);
  res.status(201).json({ success: true, user, token });
});

// POST /api/auth/login
router.post('/login', [
  body('email').notEmpty().withMessage('Email é obrigatório'),
  body('senha').notEmpty().withMessage('Senha é obrigatória'),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const { email, senha } = req.body;
  const user = findByEmail(email);

  if (!user || !verifySenha(senha, user.senha)) {
    return res.status(401).json({ success: false, error: 'Credenciais inválidas' });
  }

  const token = generateToken(user.id);
  const { senha: _, ...userWithoutSenha } = user;
  res.json({ success: true, user: userWithoutSenha, token });
});

// GET /api/auth/me
router.get('/me', require('../middleware/auth').authMiddleware, (req, res) => {
  const user = findById(req.userId);
  if (!user) {
    return res.status(404).json({ success: false, error: 'Usuário não encontrado' });
  }
  res.json({ success: true, user });
});

module.exports = router;
