const { Message } = require("../../Schema/index");

const getAllMessages = async (req, res) => {
  return await Message.find({})
    .then((messages) => res.status(200).json(messages))
    .catch((err) => res.status(500).json(err));
};

module.exports = getAllMessages;
