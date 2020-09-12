CREATE DATABASE arg_db;

USE arg_db;


CREATE TABLE IF NOT EXISTS `arg_db`.`argo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));



INSERT INTO argo (id, name) VALUES 
(1, 'Argonaut 1'),
(2, 'Argonaut 2'),
(3, 'Argonaut 3'),
(4, 'Argonaut 4'),
(5, 'Argonaut 5');