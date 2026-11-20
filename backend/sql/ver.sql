-- Consultas rápidas para conferir o banco no Workbench
SELECT id, nome, email, goal, nivel, titulo, pontos FROM prepenem.users ORDER BY id;

SELECT TABLE_NAME, TABLE_ROWS FROM information_schema.TABLES WHERE TABLE_SCHEMA = 'prepenem';
