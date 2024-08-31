CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    email VARCHAR(100),
    senha VARCHAR(100),
    vip BOOLEAN DEFAULT FALSE
);

CREATE TABLE modulos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    descricao TEXT
);

CREATE TABLE videos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    modulo_id INT,
    titulo VARCHAR(100),
    url VARCHAR(255),
    FOREIGN KEY (modulo_id) REFERENCES modulos(id)
);

CREATE TABLE compras (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT,
    data_compra DATE,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
