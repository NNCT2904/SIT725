// Example: /adder?num1=1&num2=2
const adder = (req, res) => {
  try{
    var num1 = parseInt(req.body.num1);
    var num2 = parseInt(req.body.num2);

    var result = num1 + num2;
    res.status(200).json(`${num1} + ${num2} = ${result}`);
  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports = adder;
