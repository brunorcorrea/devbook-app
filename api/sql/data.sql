INSERT INTO usuarios (nome, nick, email, senha)
VALUES
("Usuário 1", "usuario1", "usuario1@gmail.com", "$2a$10$Nq2p5nqwc/SHPRoF4DO54uZzOBC8T35efTNMBDHgPOHJ86UhPTebC"), -- user1
("Usuário 2", "usuario2", "usuario2@gmail.com", "$2a$10$Nq2p5nqwc/SHPRoF4DO54uZzOBC8T35efTNMBDHgPOHJ86UhPTebC"), -- user2
("Usuário 3", "usuario3", "usuario3@gmail.com", "$2a$10$Nq2p5nqwc/SHPRoF4DO54uZzOBC8T35efTNMBDHgPOHJ86UhPTebC"); -- user3

INSERT INTO seguidores (usuario_id, seguidor_id)
VALUES
(1,2),
(3,1),
(1,3);

INSERT INTO publicacoes (titulo, conteudo, autor_id)
VALUES
("Publicação do Usuário 1", "Essa é a publicação do usuário 1", 1),
("Publicação do Usuário 2", "Essa é a publicação do usuário 2", 2),
("Publicação do Usuário 3", "Essa é a publicação do usuário 3", 3);