drop database if exists myapp;
create database myapp;
use myapp;
create table `lists`(
  `id` INTEGER AUTO_INCREMENT,
  `text` TEXT,
  PRIMARY KEY (`id`)
);