// Progresso das aulas de redação por aluno (MySQL).
const { query } = require('../db');

// Lista as aulas concluídas pelo aluno, com a data de conclusão.
async function listCompleted(userId) {
  const [rows] = await query(
    'SELECT lesson_id AS lessonId, concluidoEm FROM redacao_progress WHERE user_id = ? ORDER BY concluidoEm ASC',
    [userId]
  );
  return rows;
}

// Marca ou desmarca uma aula como concluída.
async function setCompleted(userId, lessonId, completed) {
  if (completed) {
    await query(
      'INSERT IGNORE INTO redacao_progress (user_id, lesson_id) VALUES (?, ?)',
      [userId, lessonId]
    );
  } else {
    await query(
      'DELETE FROM redacao_progress WHERE user_id = ? AND lesson_id = ?',
      [userId, lessonId]
    );
  }
}

module.exports = { listCompleted, setCompleted };
