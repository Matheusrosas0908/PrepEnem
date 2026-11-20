const mysql = require('mysql2/promise');
require('dotenv').config();

// Pool de conexões usado por toda a aplicação.
const pool = mysql.createPool({
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'prepenem',
  charset: 'utf8mb4',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Executa uma consulta parametrizada (prepare + execute).
const query = (sql, params = []) => pool.execute(sql, params);

// Verifica a conexão na inicialização do servidor.
async function testConnection() {
  const connection = await pool.getConnection();
  try {
    await connection.ping();
    return true;
  } finally {
    connection.release();
  }
}

module.exports = { pool, query, testConnection };
