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