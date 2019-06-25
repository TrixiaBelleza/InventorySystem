"use strict"

const router = require(__dirname + "/router/router")
const express = require('express')
const body_parser = require('body-parser')

let start;
let handler;
let app;

start = () => {
	if(handler) {
		handler.close();
	}

	app = express();
	console.log("Starting at port 3001");
	app.use(body_parser.urlencoded({extended: true}));
	app.use(body_parser.json());
	app.use(require('cors')());
	app.use(router(express.Router()));

	return app.listen(3001, "127.0.0.1");
}

handler = start();

module.exports = {
	app,
	start,
	handler
}