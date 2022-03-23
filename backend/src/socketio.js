const { Message } = require("./Schema");

const sockets = (io) => {
  io.on("connection", async (socket) => {
    console.log(`id ${socket.id} connected`);

    const messageUpdate = await Message.find({});

    socket.emit("messageUpdate", messageUpdate);

    socket.on("disconnect", () => {
      console.log(`id ${socket.id} disconnected`);
    });
    socket.on("serverCheckSocket", () => {
      const id = socket.id;
      io.emit("clientCheckSocket", id);
    });
  });
};

module.exports = sockets;
