var app = require('express');
var appRouter = app.Router();
var adder = require('./Controllers/Ultis/adder');
var serverChecker = require('./Controllers/Ultis/serverCheck');
var { getAllMessages , sendMessage, getMessage, deleteMessage } = require('./Controllers/MessageController');
var bodyParser = require('body-parser');

appRouter.use(bodyParser.json());

appRouter.get('/adder', adder);
appRouter.get('/serverCheck', serverChecker);

// Message Controlelr
appRouter.post('/sendMessage', sendMessage);
appRouter.get('/getAllMessages', getAllMessages);
appRouter.get('/getMessage', getMessage);
appRouter.post('/deleteMessage', deleteMessage);

module.exports = appRouter;