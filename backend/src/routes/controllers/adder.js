// Example: /adder?num1=1&num2=2
const adder = (req, res) => {
  var num1 = parseInt(req.body.num1);
  var num2 = parseInt(req.body.num2);

  var result = num1 + num2;
  res.send(`${num1} + ${num2} = ${result}`);
};

module.exports = adder;
