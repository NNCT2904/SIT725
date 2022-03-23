const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: String,
    required: true,
  },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
