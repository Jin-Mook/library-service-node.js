drop database if exists library_service;
create database library_service;
use library_service;
CREATE TABLE `Users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_email` varchar(255) NOT NULL UNIQUE,
  `user_password` text NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `social_login` varchar(255) DEFAULT "local"
);
CREATE TABLE `Book_lists` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `book_name` varchar(255) NOT NULL,
  `publisher` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `pages` int NOT NULL,
  `isbn` bigint NOT NULL,
  `description` text NOT NULL,
  `link` text NOT NULL,
  `book_image` varchar(255) NOT NULL,
  `remain` int NOT NULL DEFAULT 5
);
CREATE TABLE `Book_borrow_return` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `book_id` int NOT NULL,
  `borrow_date` date NOT NULL,
  `return_date` date NOT NULL,
  `returned_date` boolean DEFAULT 0
);
CREATE TABLE `Reviews` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `book_id` int NOT NULL,
  `rating` int DEFAULT 0,
  `context` text
);
ALTER TABLE
  `Book_borrow_return`
ADD
  FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`);
ALTER TABLE
  `Book_borrow_return`
ADD
  FOREIGN KEY (`book_id`) REFERENCES `Book_lists` (`id`);
ALTER TABLE
  `Reviews`
ADD
  FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`);
ALTER TABLE
  `Reviews`
ADD
  FOREIGN KEY (`book_id`) REFERENCES `Book_lists` (`id`);
-- LOAD DATA INFILE '/var/lib/mysql-files/elice_library.xlsx' INTO TABLE Book_lists;