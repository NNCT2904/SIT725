require('dotenv').config();
var cors = require('cors');
var exress = require('express');
var appRouter = require('./routes/routes.js');
var PORT = 3000

var app = exress();
app.use(cors());
app.use(exress.static('./public'));
app.use(appRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;