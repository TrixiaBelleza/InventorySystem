"use strict";

//Connect controller to database
const db = require(__dirname + "/../lib/mysql");

//Adds category to database
exports.post_category = (req, res, next) => {
	const data = {
		category_name : req.body.category_name,
		category_desc : req.body.category_desc
	};
	const query_string = 'INSERT INTO categories (category_name, category_desc) VALUES (?, ?)';
	db.query(query_string, [data.category_name, data.category_desc], (err, result) => {
		if(err) {
			console.log("err");
		}
		else {
			result = data;
		}
		res.send(result);	
	});
};

//Adds product to database
exports.post_product = (req, res, next) => {
	const data = {
		product_name : req.body.product_name,
		qty_stock : req.body.qty_stock,
		product_desc : req.body.product_desc,
		price : req.body.price,
		category_id : req.body.category_id
	};
	const query_string = 'INSERT INTO products (product_name, qty_stock, product_desc, price, category_id) VALUES (?, ?, ?, ?, ?)';
	db.query(query_string, [data.product_name, data.qty_stock, data.product_desc, data.price, data.category_id], (err, result) => {
		if(err) {
			console.log(err);
		}
		else {
			result = data;
		}
		res.send(result);	
	});
};

//get all categories from database
exports.get_all_categories = (req, res, next) => {
	db.query('SELECT * FROM categories', [], (err, result) => {
		res.send(result);
	});
};

//delete category
exports.delete_category = (req, res, next) => {
	const data = {
		category_id : req.body.category_id
	};
	const query_string = 'DELETE FROM categories WHERE category_id = ?';
	db.query(query_string, [data.category_id], (err, result) => {
		if(err) console.log(err);
		res.send(data);
	});
}