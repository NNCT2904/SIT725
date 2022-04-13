const { Message } = require("../../../Models");

const getAllMessages = async (req, res) => {
  return await Message.find({})
    .then((messages) => res.status(200).json(messages))
    .catch((err) => res.status(500).json(err));
};

const sendMessage = async (req, res) => {
  const message = new Message(req.body);

  if (!message.text || message.text == "") {
    return res.status(400).json({
      error: "Message text is required",
    });
  }

  message.timeStamp = new Date().toString();

  return await message
    .save()
    .then((message) => res.status(200).json(message))
    .catch((err) => res.status(500).json(err));
};

const getMessage = async (req, res) => {
  const { _id } = req.body;

  if (!_id) {
    return res.status(400).json({ error: 'Missing parameter "_id"' });
  }

  return await Message.findById(_id)
    .then((message) => res.status(200).json(message))
    .catch((error) => res.status(404).json({ error: "Message not found" }));
};

const deleteMessage = async (req, res) => {
  const { _id } = req.body;

  if (!_id) {
    return res.status(400).json({ error: 'Missing parameter "_id"' });
  }

  return await Message.findByIdAndDelete(_id)
    .then((message) => {
      if (message) {
        return res.status(200).json({ message: "Message deleted" });
      } else {
        res.status(404).json({ error: "Message not found" });
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

module.exports = {
  getAllMessages,
  sendMessage,
  getMessage,
  deleteMessage,
};
