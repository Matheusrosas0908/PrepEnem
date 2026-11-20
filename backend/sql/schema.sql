-- ============================================================
-- PrepEnem - Schema MySQL (MySQL Workbench / mysql CLI)
-- Execute este arquivo inteiro na conexão "Local instance MySQL80".
-- ============================================================

CREATE DATABASE IF NOT EXISTS prepenem
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE prepenem;

-- Tabela de usuários (login e cadastro)
CREATE TABLE IF NOT EXISTS users (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR(150) NOT NULL,
  email VARCHAR(255) NOT NULL,
  senha VARCHAR(255) NOT NULL COMMENT 'hash bcrypt',
  telefone VARCHAR(30) NOT NULL DEFAULT '',
  goal VARCHAR(50) NOT NULL DEFAULT 'Enem e Fuvest',
  nivel INT NOT NULL DEFAULT 1,
  titulo VARCHAR(80) NOT NULL DEFAULT 'Novato',
  horasEstudadas INT NOT NULL DEFAULT 0,
  pontos INT NOT NULL DEFAULT 0,
  avatar VARCHAR(3) NOT NULL DEFAULT '',
  avatarColor VARCHAR(20) NOT NULL DEFAULT '#4169E1',
  criadoEm TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  atualizadoEm TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uk_users_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Progresso das aulas de redação (uma linha por aula concluída por aluno)
CREATE TABLE IF NOT EXISTS redacao_progress (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  lesson_id VARCHAR(40) NOT NULL,
  concluidoEm TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uk_redacao_progress_user_lesson (user_id, lesson_id),
  CONSTRAINT fk_redacao_progress_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Usuário usado pela aplicação (senha configurada também no backend/.env)
CREATE USER IF NOT EXISTS 'prepenem_app'@'localhost' IDENTIFIED BY 'prepenem123';
CREATE USER IF NOT EXISTS 'prepenem_app'@'127.0.0.1' IDENTIFIED BY 'prepenem123';
ALTER USER 'prepenem_app'@'localhost' IDENTIFIED BY 'prepenem123';
ALTER USER 'prepenem_app'@'127.0.0.1' IDENTIFIED BY 'prepenem123';
GRANT SELECT, INSERT, UPDATE, DELETE ON prepenem.* TO 'prepenem_app'@'localhost';
GRANT SELECT, INSERT, UPDATE, DELETE ON prepenem.* TO 'prepenem_app'@'127.0.0.1';
FLUSH PRIVILEGES;

-- Usuários de teste (senha: 123456)
INSERT IGNORE INTO users
  (id, nome, email, senha, telefone, goal, nivel, titulo, horasEstudadas, pontos, avatar, avatarColor)
VALUES
  (1, 'Matheus Rosas Chagas', 'matheus@prepenem.com', '$2b$10$YNz4MJ/rfbQIYiWMbl3A..vbC6ujBkKoLZR3nOlpHrDUirxjj2IXC', '(11) 99999-9999', 'Enem e Fuvest', 8, 'Estudante Dedicado', 10, 3200, 'MRC', '#4169E1'),
  (2, 'Luiz Barbosa', 'luiz@prepenem.com', '$2b$10$E4CwepijeMY1ni09CrzVW.NmGgWkhru/vRGVhUXPbVYnY1L2Axk0y', '(11) 88888-8888', 'Enem', 12, 'Mestre dos Estudos', 160, 4250, 'LB', '#AA0000'),
  (3, 'Oscar Batista', 'oscar@prepenem.com', '$2b$10$fZuR70uilG.D7FqPIRyGbOWHu.HSI9Rs5Hhvol5OZ7IqE86ORD7Re', '(11) 77777-7777', 'Fuvest', 10, 'Focado no ENEM', 142, 3890, 'OB', '#4CAF50');

-- Ajusta o AUTO_INCREMENT para não colidir com os IDs inseridos acima
ALTER TABLE users AUTO_INCREMENT = 4;

SELECT id, nome, email, goal, pontos FROM users ORDER BY id;
