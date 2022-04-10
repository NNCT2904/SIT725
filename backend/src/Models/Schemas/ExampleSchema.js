const mongoose = require("mongoose");

const exampleSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  }
});

const Message = mongoose.model("example", exampleSchema);

module.exports = Message;