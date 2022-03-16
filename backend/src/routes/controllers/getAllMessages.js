const { Message } = require('../../Schema/index');

const getAllMessages = async (req, res) => {
  const messages = await Message.find({});

  try {
    res.status(200).send(messages);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = getAllMessages;