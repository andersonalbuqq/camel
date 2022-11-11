INSERT INTO cliente VALUES (DEFAULT, 'Anderson', 'anderson@camel.com', '123', '12365478908', '81985267452');
INSERT INTO cliente VALUES (DEFAULT, 'Elias', 'elais@camel.com', '123', '12318278906', '81985951452');
INSERT INTO cliente VALUES (DEFAULT, 'Ricardo', 'ricardo@camel.com', '123', '35765478980', '81936467452');
INSERT INTO cliente VALUES (DEFAULT, 'Helena', 'helena@camel.com', '123', '12365479551', '81985267842');
INSERT INTO cliente VALUES (DEFAULT, 'Luiz', 'luiz@camel.com', '123', '12365842960', '81985263202');
INSERT INTO cliente VALUES (DEFAULT, 'Vinícius', 'vinicius@camel.com', '123', '18242547890', '81985467452');
INSERT INTO cliente VALUES (DEFAULT, 'Claudia', 'claudia@camel.com', '123', '12825148420', '81985354452');
INSERT INTO cliente VALUES (DEFAULT, 'Marcela', 'marcela@camel.com', '123', '12365437890', '81985842452');
INSERT INTO cliente VALUES (DEFAULT, 'Paula', 'paula@camel.com', '123', '12345478910', '81985268422');
INSERT INTO cliente VALUES (DEFAULT, 'Michele', 'michele@camel.com', '123', '12348477890', '81946267452');

INSERT INTO produto VALUES (DEFAULT, 'Interuptor', '5,09', 'O Interruptor Tramontina Lux2 1 Seção Simples 10A, foi desenvolvido para proporcionar mais praticidade e segurança no acionamento de energia elétrica.', 'Marca: Tramontina, Codigo de barras:	7891435924558,
Material:Termoplastico', 'Tramontina');
INSERT INTO produto VALUES (DEFAULT, 'Tomada', '5.19', 'A Tomada Tramontina Lux2 1 Seção 2PxT 20A, foi desenvolvida para proporcionar maior qualidade e segurança como tomada de acionamento e alimentação elétrica.', 'MARCA:TRAMONTINA, COLECAO:Lux, DIMENSOES:122 x 79 x 42mm', 'Tramontina');
INSERT INTO produto VALUES (DEFAULT, 'Fio', '179.90', 'O Cabo Flexível 2,5MM 100 Metros Azul SIL Fios é um cabo elétrico para instalações fixas em baixa tensão (residencias, comerciais e industriais)', 'MARCA:SIL Fios e Cabos, LINHA:FLEXSIL 750V, CONDUTOR:Fios de Cobre', 'Sil');
INSERT INTO produto VALUES (DEFAULT, 'Lâmpada LED', '5.39', 'A lâmpada LED a-60 da nitrolux é ideal para iluminação interna. Podendo substituir modelos de lâmpada incandescente com gama de aplicabilidade diversa', 'Marca:Nitrolux, Modelo:A-60, Código:1659', 'Nitrolux');
INSERT INTO produto VALUES (DEFAULT, 'Disjuntor Monofásico ', '13.79', 'Desenvolvido Para Garantir A Segurança Da Instalação, Ele Preserva A Rede Elétrica E Seus Equipamentos Em Caso De Sobrecarga Ou Curto-Circuito', 'Marca:Tramontina, Ref:58011105, Codigo De Barra:7891435966336', 'Tramontina');
INSERT INTO produto VALUES (DEFAULT, 'Painel led', '16.19', 'Modernize seu ambiente interno, com um produto prático e versátil. O Painel Led da Fortec, produzido com tecnologia de ponta e os mais altos padrões de qualidade', 'Tipo:De Embutir, Formato:Quadrado, Potencia:18w', 'Fortec');
INSERT INTO produto VALUES (DEFAULT, 'Eletroduto Rígido', '11.09', 'O Eletroduto Rígido Amanco Soldável 25 MM 3M é aplicado em instalações prediais elétricas de baixa tensão', 'Material:PVC, Característica:Rígido', 'Amanco');
INSERT INTO produto VALUES (DEFAULT, 'Curva Eletroduto', '3.99', 'A Curva Eletroduto Tigre Soldável Classe A 25 MM, foi desenvolvida para proporcionar mais qualidade e eficiência em instalações elétricas prediais de baixa tensão', 'Ângulo:90 graus, Código de barras:7897613333518, Material:PVC', 'Tigre');

UPDATE produto SET id_produto_relacionado=4 WHERE id=1;
UPDATE produto SET id_produto_relacionado=3 WHERE id=2;
UPDATE produto SET id_produto_relacionado=5 WHERE id=3;
UPDATE produto SET id_produto_relacionado=1 WHERE id=4;
UPDATE produto SET id_produto_relacionado=7 WHERE id=5;
UPDATE produto SET id_produto_relacionado=3 WHERE id=6;
UPDATE produto SET id_produto_relacionado=8 WHERE id=7;
UPDATE produto SET id_produto_relacionado=7 WHERE id=8;

INSERT INTO endereco VALUES (DEFAULT, '1', '55042040', '15 de novembro', 'José Carlos de Oliveira', 85,'-','Caruaru','PE');
INSERT INTO endereco VALUES (DEFAULT, '2', '55853040', 'Rio Branco', 'Salgado', 98,'prox a padaria X','Bezerros','PE');
INSERT INTO endereco VALUES (DEFAULT, '3', '55042841', 'Treze de maio', 'Rendeiras', 482,'-','Caruaru','PE');
INSERT INTO endereco VALUES (DEFAULT, '4', '55048420', 'São Sebastião', 'Vila Kennedy', 36,'Proximo a farmácia Y','Recife','PE');
INSERT INTO endereco VALUES (DEFAULT, '5', '55087440', 'Cleto Campelo', 'Indianópolis', 84,'-','Caruaru','PE');
INSERT INTO endereco VALUES (DEFAULT, '6', '55843040', 'Adjair Casé', 'Divinópoles', 852,'Proximo a praça Z','Recife','PE');
INSERT INTO endereco VALUES (DEFAULT, '7', '55356040', 'Alferes jorge', 'Riachão', 357,'-','Bonito','PE');
INSERT INTO endereco VALUES (DEFAULT, '8', '55845640', 'Agamenon Magalhães', 'Centro', 185,'Segundo andar','Bezerros','PE');

INSERT INTO compra VALUES (DEFAULT, '3', '18-03-2022');
INSERT INTO compra VALUES (DEFAULT, '3', '18-11-2021');
INSERT INTO compra VALUES (DEFAULT, '2', '01-04-2022');
INSERT INTO compra VALUES (DEFAULT, '5', '16-05-2022');
INSERT INTO compra VALUES (DEFAULT, '6', '31-11-2022');
INSERT INTO compra VALUES (DEFAULT, '1', '24-06-2022');
INSERT INTO compra VALUES (DEFAULT, '8', '15-08-2022');
INSERT INTO compra VALUES (DEFAULT, '8', '19-09-2022');

INSERT INTO compra_produto VALUES (1, 1, 3);
INSERT INTO compra_produto VALUES (1, 3, 1);
INSERT INTO compra_produto VALUES (1, 4, 3);
INSERT INTO compra_produto VALUES (2, 3, 1);
INSERT INTO compra_produto VALUES (2, 7, 2);
INSERT INTO compra_produto VALUES (3, 1, 3);
INSERT INTO compra_produto VALUES (4, 2, 5);
INSERT INTO compra_produto VALUES (4, 3, 2);
INSERT INTO compra_produto VALUES (4, 4, 4);
INSERT INTO compra_produto VALUES (4, 5, 7);
INSERT INTO compra_produto VALUES (5, 6, 2);
INSERT INTO compra_produto VALUES (5, 7, 8);
INSERT INTO compra_produto VALUES (6, 8, 2);
INSERT INTO compra_produto VALUES (6, 2, 1);
INSERT INTO compra_produto VALUES (7, 1, 2);
INSERT INTO compra_produto VALUES (8, 4, 3);
