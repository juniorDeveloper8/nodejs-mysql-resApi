CREATE DATABASE IF NOT EXISTS node;

USE node;

CREATE TABLE user (

  id int primary key auto_increment not null,
  email varchar(25)not null,
  password varchar(255) not null

); 

INSERT INTO user VALUES 
( 1, 'test@tes.com', '12345'),
( 2, 'peito@jose.com', 'ksldjf'),
( 3, 'sjaof@sf.com','sdkfjq534');