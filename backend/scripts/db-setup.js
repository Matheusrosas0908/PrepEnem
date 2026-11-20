// Cria o banco, a tabela, o usuário da aplicação e os dados iniciais.
// Alternativa ao Workbench: npm run db:setup (na raiz) ou npm run db:setup (em backend/)
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
require('dotenv').config();

async function main() {
  const sqlPath = path.join(__dirname, '..', 'sql', 'schema.sql');
  const sql = fs.readFileSync(sqlPath, 'utf8');

  if (!process.env.DB_ROOT_PASSWORD) {
    console.error('Defina DB_ROOT_PASSWORD no backend/.env para executar o setup.');
    process.exit(1);
  }

  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    port: Number(process.env.DB_PORT || 3306),
    user: 'root',
    password: process.env.DB_ROOT_PASSWORD,
    charset: 'utf8mb4',
    multipleStatements: true,
  });

  try {
    await connection.query(sql);
    console.log('Banco prepenem criado/atualizado com sucesso.');
  } finally {
    await connection.end();
  }
}

main().catch(err => {
  console.error('Falha no setup do banco:', err.message);
  process.exit(1);
});
