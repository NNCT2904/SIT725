var exress = require('express');
var PORT = 3000

var app = exress();
app.use(exress.static('./public'));

var adder = (num1, num2) => {
    return num1 + num2;
}

app.get('/test', (req, res) => {
    var username = req.query.username;
    console.log(`Things happened on /test ${username}`);
    res.send(`Hello /test ${username}`);
});

app.get('/adder', (req, res) => {
    var num1 = parseInt(req.query.num1);
    var num2 = parseInt(req.query.num2);
    var result = adder(num1, num2);
    console.log(`${num1} + ${num2} = ${result}`);
    res.send(`${num1} + ${num2} = ${result}`);
})

app.listen(PORT);

console.log(`Server is running on port ${PORT}`);