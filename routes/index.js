const routes = require('express').Router();
const lesson2Controller = require('../controllers/lesson2');

routes.get('/professional', lesson2Controller.professionalRoute);

module.exports = routes;