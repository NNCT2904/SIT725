// Button Functionalities
const testButtonClick = () => {
  socket.emit('serverCheckSocket', {});
};

const getRandomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Socket Functionalities
const socket = io("http://localhost:3000");
socket.on('clientCheckSocket', (data) => {
  if (data){
    alert(`Your Socket ID is ${data}`);
  } else {
    alert('Socket not connected');
  }
});


// document 
$(document).ready(() => {
  console.log('Ready');

  $('#testButton').click(testButtonClick)
});
