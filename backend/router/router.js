"use strict"

//Connect router to controller
const controller = require(__dirname + '/../controller/controller');

module.exports = (router) => {
	router.post('/add-category/', controller.post_category);
	router.get('/categories/', controller.get_all_categories);
	return router;
};