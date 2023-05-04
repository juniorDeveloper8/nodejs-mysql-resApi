CREATE DATABASE IF NOT EXISTS node;

USE node;

CREATE TABLE user (

  id int primary key auto_increment not null,
  email varchar(25)not null,
  password varchar(255) not null

); 