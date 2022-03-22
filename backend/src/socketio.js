const sockets = (io) => {
  io.on("connection", (socket) => {
    console.log(`id ${socket.id} connected`);

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
