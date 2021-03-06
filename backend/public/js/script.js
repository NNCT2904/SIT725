// A message list would looks like this:
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

const newMessage = () => {

  let text = $('#inputTextArea').val();

  let message = {text}

  // sendMessage(message);

  socket.emit("newMessage", message);

  $('#inputTextArea').val("");
};

const appendMessage = (message) => {
  const template = `<div class="css-messages-card card blue darken-4">
    <div class="card-content white-text">
      <p> No.${message._id}</p>
      <br />
      <p class="css-message-text">${message.text}</p>
    </div>
    <div class="card-action">
      <a href="#">Reply</a>
    </div>
  </div>`;
  $("#messagesSection").prepend(template);
};

// Button Functionalities
const testButtonClick = () => {
  socket.emit("serverCheckSocket", {});
};

const getRandomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// REST Api functionalities
// const requestMessages = () => {
//   $.get("/api/getAllMessages", (messageList) => {
//     if (messageList.length > 0) {
//       appendMessage(messageList);
//     }
//   });
// };

// const sendMessage = (message) => {
//   console.log(JSON.stringify(message));
//   $.ajax({
//     url: "/api/sendMessage",
//     contentType: "application/json",
//     dataType: "json",
//     data: JSON.stringify(message),
//     processData: false,
//     type: "POST",
//     success: (result) => {
//       alert("Message sent!");
//     },
//   });
// };

// Socket Functionalities
const socket = io("http://localhost:3000");
socket.on("clientCheckSocket", (data) => {
  if (data) {
    alert(`Your Socket ID is ${data}`);
  } else {
    alert("Socket not connected");
  }
});

socket.on("messageUpdate", (message) => {
  // console.log('called', message);
  appendMessage(message);
});

// document
$(document).ready(() => {
  console.log("Ready");

  $("#testButton").click(testButtonClick);

  $("#sendMessageButton").click(newMessage);

  $(".modal").modal();

  // requestMessages();
});
