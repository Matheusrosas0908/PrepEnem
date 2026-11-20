// Persistência de usuários em MySQL (mysql2/promise)
const bcrypt = require('bcryptjs');
const { query } = require('../db');

// Converte uma linha do banco para o formato usado pela aplicação
function rowToUser(row) {
  if (!row) return null;
  return {
    id: row.id,
    nome: row.nome,
    email: row.email,
    senha: row.senha,
    telefone: row.telefone,
    goal: row.goal,
    nivel: row.nivel,
    titulo: row.titulo,
    horasEstudadas: row.horasEstudadas,
    pontos: row.pontos,
    avatar: row.avatar,
    avatarColor: row.avatarColor,
    criadoEm: row.criadoEm,
  };
}

function semSenha(user) {
  if (!user) return null;
  const { senha, ...userWithoutSenha } = user;
  return userWithoutSenha;
}

// Busca por e-mail (retorna o hash da senha para validação no login)
async function findByEmail(email) {
  const [rows] = await query('SELECT * FROM users WHERE email = ? LIMIT 1', [
    String(email || '').trim().toLowerCase(),
  ]);
  return rowToUser(rows[0]);
}

// Busca por id (sem senha)
async function findById(id) {
  const [rows] = await query('SELECT * FROM users WHERE id = ? LIMIT 1', [id]);
  return semSenha(rowToUser(rows[0]));
}

// Lista todos os usuários (sem senha) — usado pelo ranking
async function listUsers() {
  const [rows] = await query('SELECT * FROM users ORDER BY pontos DESC, id ASC');
  return rows.map(row => semSenha(rowToUser(row)));
}

// Cria usuário. Aceita os campos do index.html e o formato antigo.
// Retorna null quando o e-mail já existe.
async function create({ name, nome, email, password, senha, telefone, goal } = {}) {
  const nomeFinal = String(name || nome || '').trim();
  const senhaFinal = password || senha || '';
  const emailFinal = String(email || '').trim().toLowerCase();
  const goalFinal = goal || 'Enem e Fuvest';
  const avatar = nomeFinal
    .split(' ')
    .filter(Boolean)
    .map(n => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  const hash = bcrypt.hashSync(String(senhaFinal), 10);

  try {
    const [result] = await query(
      `INSERT INTO users (nome, email, senha, telefone, goal, avatar)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [nomeFinal, emailFinal, hash, telefone || '', goalFinal, avatar]
    );
    const [rows] = await query('SELECT * FROM users WHERE id = ?', [result.insertId]);
    return semSenha(rowToUser(rows[0]));
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') return null;
    throw err;
  }
}

// Compara senha em texto com o hash bcrypt
const verifySenha = (senha, hashedSenha) => bcrypt.compareSync(String(senha), hashedSenha);

// Atualiza campos do usuário (whitelist para evitar SQL injection)
const CAMPOS_PERMITIDOS = new Set([
  'nome', 'email', 'telefone', 'goal', 'nivel', 'titulo',
  'horasEstudadas', 'pontos', 'avatar', 'avatarColor',
]);

async function updateProgress(id, updates = {}) {
  const entries = Object.entries(updates).filter(([key]) => CAMPOS_PERMITIDOS.has(key));
  if (!entries.length) return findById(id);

  const sets = entries.map(([key]) => `${key} = ?`).join(', ');
  const values = entries.map(([, value]) => value).concat(id);
  await query(`UPDATE users SET ${sets} WHERE id = ?`, values);
  return findById(id);
}

module.exports = {
  listUsers,
  findByEmail,
  findById,
  create,
  verifySenha,
  updateProgress,
};
