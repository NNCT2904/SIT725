const adder = (req, res) => {
    var num1 = parseInt(req.query.num1);
    var num2 = parseInt(req.query.num2);
    var result = num1 + num2;
    res.send(`${num1} + ${num2} = ${result}`)
}

module.exports = adder;
