CREATE DATABASE arg_db;

USE arg_db;


CREATE TABLE IF NOT EXISTS `arg_db`.`argo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `rank` INT NULL,
  PRIMARY KEY (`id`));



INSERT INTO argo (id, name, rank) VALUES 
(1, 'Argonaut 1', 1),
(2, 'Argonaut 2', 2),
(3, 'Argonaut 3', 3),
(4, 'Argonaut 4', 4),
(5, 'Argonaut 5', 5);