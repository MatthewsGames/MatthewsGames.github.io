var socket = io();
socket.on('message', function(data) {
  console.log(data);
});
var movement = {
  up: false,
  down: false,
  left: false,
  right: false
}
document.addEventListener('keydown', function(event) {
  switch (event.keyCode) {
    case 65: // A
      movement.left = true;
      break;
    case 87: // W
      movement.up = true;
      break;
    case 68: // D
      movement.right = true;
      break;
    case 83: // S
      movement.down = true;
      break;
  }
});
document.addEventListener('keyup', function(event) {
  switch (event.keyCode) {
    case 65: // A
      movement.left = false;
      break;
    case 87: // W
      movement.up = false;
      break;
    case 68: // D
      movement.right = false;
      break;
    case 83: // S
      movement.down = false;
      break;
  }
});
socket.emit('new player');
setInterval(function() {
  socket.emit('movement', movement);
}, 1000 / 60);
    var sketchProc = function(processingInstance) {
     with (processingInstance) {
       size(400, 400); 
        frameRate(55);
        socket.on('state', function(players) {
          background(255);
       fill(0,0,0);
       for(var id in players){
         var player = players[id];
        rect(player.x,player.y,10,10);
       }
        });
       }};

    // Get the canvas that Processing-js will use
    var canvas = document.getElementById("canvas"); 
    // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
    var processingInstance = new Processing(canvas, sketchProc); 
