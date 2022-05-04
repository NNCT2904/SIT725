const { Message } = require("../Models");

const sockets = (io) => {
  io.on("connection", async (socket) => {
    console.log(`id ${socket.id} connected`);

    const messageUpdate = await Message.find({});
    
    messageUpdate.forEach((messages) => {
      socket.emit("messageUpdate", messages);
    });

    socket.on("newMessage", (message) => {
      if (!message.text || message.text == "") return;

      const newMessage = new Message(message);
      newMessage.timeStamp = new Date().toString();

      newMessage.save();
      io.emit("messageUpdate", newMessage);
    });

    socket.on("disconnect", () => {
      console.log(`id ${socket.id} disconnected`);
    });
    
    socket.on("serverCheckSocket", () => {
      const id = socket.id;
      socket.emit("clientCheckSocket", id);
    });
  });
};

module.exports = sockets;
