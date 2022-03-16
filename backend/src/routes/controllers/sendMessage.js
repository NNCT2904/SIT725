const { Message } = require('../../Schema');

const sendMessage = async (req, res) => {
    const message = new Message(req.body);

    message.timeStamp = new Date().toString();

    try {
        await message.save();
        res.status(201).send(message);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = sendMessage;