require('dotenv').config();
var cors = require('cors');
var exress = require('express');
var mongoConnect = require('./mongoConnect');
var sockets = require('./Routes/socketio');

var app = exress();

var http = require('http').createServer(app);
var io = require('socket.io')(http);

var appRouter = require('./Routes');
var PORT = 3000;

app.use(cors());
app.use(exress.static('./public'));
app.use('/api',appRouter);

// Connect to MongoDB
mongoConnect(process.env.MONGODB_URI);

sockets(io);

http.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}:`);
    console.log(`http://localhost:${PORT}`);
});

const server = { app, http, io }

module.exports = server;