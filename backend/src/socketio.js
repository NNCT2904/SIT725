const sockets = (io) => {
  io.on("connection", (socket) => {
    console.log(`id ${socket.id} connected`);

    socket.on("disconnect", () => {
      console.log(`id ${socket.id} disconnected`);
    });
  });
};

module.exports = sockets;
