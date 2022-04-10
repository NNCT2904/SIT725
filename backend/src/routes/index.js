var app = require('express');
var appRouter = app.Router();
var adder = require('./controllers/adder');
var serverChecker = require('./controllers/serverCheck');
var { getAllMessages , sendMessage } = require('./controllers/MessageController');
var bodyParser = require('body-parser');

appRouter.use(bodyParser.json());

appRouter.get('/adder', adder);
appRouter.get('/serverCheck', serverChecker);
appRouter.post('/sendMessage', sendMessage);
appRouter.get('/getAllMessages', getAllMessages);

module.exports = appRouter;