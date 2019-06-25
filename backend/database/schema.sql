CREATE DATABASE IF NOT EXISTS inventory_db;
USE inventory_db;

CREATE TABLE categories (
	category_id INT NOT NULL AUTO_INCREMENT ,
	category_name VARCHAR(100) NOT NULL,
	category_desc TEXT,
	PRIMARY KEY (category_id)
);

CREATE TABLE products (
	product_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(200) NOT NULL,
	qty_stock INT NOT NULL,
	product_desc TEXT,
	price INT NOT NULL,
	category_id INT,
	PRIMARY KEY (product_id),
	FOREIGN KEY fk_category(category_id) REFERENCES categories(category_id) ON UPDATE CASCADE ON DELETE CASCADE
);