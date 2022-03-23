// A message would look like this:
// [
//   {
//     timeStamp: '03/23/22 1:00',
//     id: "1",
//     text: "This is a test message",
//   },
//   {
//     timeStamp: '03/23/22 2:00',
//     id: "2",
//     text: "This is a test message 2",
//   },
// ];

const addMessage = (messages) => {
  messages.forEach((message) => {
    let template = `<div class="css-messages card blue darken-4">
    <div class="card-content white-text">
      <p> No.${message._id}</p>
      <br />
      <p>${message.text}</p>
    </div>
    <div class="card-action">
      <a href="#">Reply</a>
    </div>
  </div>`;

    $('#messagesSection').append(template);
  });
};

// Button Functionalities
const testButtonClick = () => {
  socket.emit("serverCheckSocket", {});
};

const getRandomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Socket Functionalities
const socket = io("http://localhost:3000");
socket.on("clientCheckSocket", (data) => {
  if (data) {
    alert(`Your Socket ID is ${data}`);
  } else {
    alert("Socket not connected");
  }
});

socket.on("messageUpdate", (messages) => {
  addMessage(messages);
})

// document
$(document).ready(() => {
  console.log("Ready");

  $("#testButton").click(testButtonClick);
});
