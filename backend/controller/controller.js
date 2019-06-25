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