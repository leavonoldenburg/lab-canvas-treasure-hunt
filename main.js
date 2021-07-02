// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

document.getElementById('character').style.display = 'none';
document.getElementById('treasure').style.display = 'none';

// Iteration 1
function drawGrid() {
  let x = 0;
  let y = 0;
  for (verticalLine = 0; verticalLine < 9; verticalLine++) {
    x += 50;
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, 500);
    context.strokeStyle = 'black';
    context.stroke();
    context.closePath();
  }
  for (horizontalLine = 0; horizontalLine < 9; horizontalLine++) {
    y += 50;
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(500, y);
    context.strokeStyle = 'black';
    context.stroke();
    context.closePath();
  }
}

class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  moveUp() {
    player.row -= 1;
  }

  moveRight() {
    player.col += 1;
  }

  moveDown() {
    player.row += 1;
  }

  moveLeft() {
    player.col -= 1;
  }
}

const player = new Character(0, 0); // (0,0) = Initial position

const playerImg = document.getElementById('character');

function drawPlayer(col, row) {
  context.drawImage(playerImg, col * 50, row * 50);
}
playerImg.addEventListener('load', drawPlayer);

class Treasure {
  setRandomPosition(col, row) {
    this.col = col;
    this.row = row;
  }
}

const treasureImg = document.getElementById('treasure');

function drawTreasure(col, row) {
  context.drawImage(treasureImg, col * 50, row * 50, 50, 50);
}
treasureImg.addEventListener('load', drawTreasure);

function drawEverything() {
  drawGrid();
  drawPlayer(0, 0);
  drawTreasure(7, 2);
}

drawEverything();

window.addEventListener('keydown', function (event) {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      console.log('left');
      player.moveLeft();
      drawPlayer(player.col, player.row);
      break;
    case 38:
      console.log('up');
      player.moveUp();
      drawPlayer(player.col, player.row);
      break;
    case 39:
      console.log('right');
      player.moveRight();
      drawPlayer(player.col, player.row);
      break;
    case 40:
      console.log('down');
      player.moveDown();
      drawPlayer(player.col, player.row);
      break;
  }
});
