const { Message } = require("../../Models/index");

const getAllMessages = async (req, res) => {
  return await Message.find({})
    .then((messages) => res.status(200).json(messages))
    .catch((err) => res.status(500).json(err));
};

const { Message } = require("../../Models");

const sendMessage = async (req, res) => {
  const message = new Message(req.body);

  if (!message.text || message.text == "") {
    return res.status(400).json({
      error: "Message text is required",
    });
  }

  message.timeStamp = new Date().toString();

  console.log({ message });

  return await message
    .save()
    .then((message) => res.status(201).json(message))
    .catch((err) => res.status(500).json(err));
};

module.exports = {
  getAllMessages,
  sendMessage,
};
