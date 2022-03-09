var app = require('express');
var appRouter = app.Router();
var adder = require('./controllers/adder');
var serverChecker = require('./controllers/serverCheck');

appRouter.get('/adder', adder);
appRouter.get('/serverCheck', serverChecker);

module.exports = appRouter;