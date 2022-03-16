require('dotenv').config();
var cors = require('cors');
var exress = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var appRouter = require('./routes/routes.js');
var PORT = 3000;

var app = exress();
app.use(cors());
app.use(exress.static('./public'));
app.use('/api',appRouter);

// Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}, (err) => {
    console.log('Cannot connect to MongoDb: ' + err);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;