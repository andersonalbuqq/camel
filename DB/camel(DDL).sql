CREATE TABLE cliente (
	id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	nome VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL UNIQUE,
	senha VARCHAR(100) NOT NULL,
	cpf VARCHAR(11) UNIQUE,
	telefone VARCHAR(11) UNIQUE
);

CREATE TABLE produto (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  nome VARCHAR(100) NOT NULL,
  preco NUMERIC(8,2) NOT NULL,
  descricao VARCHAR(500) NOT NULL,
  ficha_tecnica VARCHAR(500) NOT NULL,
  marca VARCHAR(100) NOT NULL,
  id_produto_relacionado INTEGER,
  CONSTRAINT fk_produto FOREIGN KEY (id_produto_relacionado) REFERENCES produto(id)
);

CREATE TABLE compra (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  id_cliente INTEGER NOT NULL,
  data_de_compra DATE NOT NULL,
  CONSTRAINT fk_cliente FOREIGN KEY (id_cliente) REFERENCES cliente(id),
);

CREATE TABLE compra_produto (
  id_compra INTEGER NOT NULL,
  id_produto INTEGER NOT NULL,
  quantidade INTEGER NOT NULL,
  CONSTRAINT fk_compra FOREIGN KEY (id_compra) REFERENCES compra(id),
  CONSTRAINT fk_produto FOREIGN KEY (id_produto) REFERENCES produto(id),
  PRIMARY KEY(id_compra, id_produto)
);
  

CREATE TABLE endereco (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  id_cliente INTEGER NOT NULL,
  cep VARCHAR(8) NOT NULL, 
  rua VARCHAR(100) NOT NULL,
  bairro VARCHAR(100) NOT NULL,
  numero INTEGER NOT NULL,
  complemento VARCHAR(100),
  cidade VARCHAR(100) NOT NULL,
  uf CHAR(2) NOT NULL,
  CONSTRAINT fk_cliente FOREIGN KEY (id_cliente) REFERENCES cliente(id)
);

CREATE TABLE sub_categoria (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  id_produto INTEGER NOT NULL,
  nome VARCHAR(100) NOT NULL,
  CONSTRAINT fk_produto FOREIGN KEY (id_produto) REFERENCES produto(id)
);

CREATE TABLE categoria (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  id_sub_categoria INTEGER  NOT NULL,
  nome VARCHAR(100) NOT NULL,
  CONSTRAINT fk_sub_categoria FOREIGN KEY (id_sub_categoria) REFERENCES sub_categoria(id)
);

CREATE TABLE ficha_tecnica (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  id_produto INTEGER,
  descricao VARCHAR(500),
  CONSTRAINT fk_produto FOREIGN KEY (id_produto) REFERENCES produto(id)
);

CREATE TABLE imagens (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  id_produto INTEGER,
  url VARCHAR(150) NOT NULL,
  CONSTRAINT fk_produto FOREIGN KEY (id_produto) REFERENCES produto(id)
);