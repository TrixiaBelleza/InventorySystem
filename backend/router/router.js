"use strict"

//Connect router to controller
const controller = require(__dirname + '/../controller/controller');

module.exports = (router) => {
	router.post('/category/', controller.post_category);

	return router;
};