const readline = require ("readline-sync");

function Board() {
  this.squares = {};
  for (let index = 1; index <= 9; index += 1) {
    this.squares[String(index)] = new Square();
  }
}

Board.prototype.displayBoard = function() {
  console.log(``);
  console.log(`     |     |     `);
  console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}  `);
  console.log(`     |     |     `);
  console.log(`-----+-----+-----`);
  console.log(`     |     |     `);
  console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}  `);
  console.log(`     |     |     `);
  console.log(`-----+-----+-----`);
  console.log(`     |     |     `);
  console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}  `);
  console.log(`     |     |     `);
  console.log(``);
}

Board.prototype.setMarker = function(key, marker) {
  this.squares[key].setMarker(marker);
}

Board.prototype.unusedSquares = function() {
  return Object.keys(this.squares).filter(key => this.squares[key].isUnused());
}

Board.prototype.isFull = function() {
  return this.unusedSquares().length === 0;
}

Board.prototype.countMarkersFor = function (player, keys) {
  let matchedMarkers = keys.filter(key => {
    return this.squares[key].getMarker() === player.getMarker();
  });

  return matchedMarkers.length;
}

function Square(marker) {
  this.marker = marker || Square.UNUSED_SQUARE;
}

Square.UNUSED_SQUARE = " ";
Square.HUMAN_MARKER = "X";
Square.COMPUTER_MARKER = "O";

Square.prototype.toString = function() {
  return this.marker;
};

Square.prototype.setMarker = function(marker) {
  this.marker = marker;
};

Square.prototype.isUnused = function() {
  return this.marker === Square.UNUSED_SQUARE;
};

Square.prototype.getMarker = function() {
  return this.marker;
};

function Player(marker) {
  this.marker = marker;
}

Player.prototype.getMarker = function() {
  return this.marker;
}

function Human() {
  Player.call(this, Square.HUMAN_MARKER);
}

Human.prototype = Object.create(Player.prototype);
Human.prototype.constructor = Human;

function Computer() {
  Player.call(this, Square.COMPUTER_MARKER);
}

Computer.prototype = Object.create(Player.prototype);
Computer.prototype.constructor = Computer;

function TTTGame() {
  this.board = new Board();
  this.human = new Human();
  this.computer = new Computer();
}

TTTGame.POSSIBLE_WINNING_COMBINATIONS = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["3", "6", "9"],
  ["1", "5", "9"],
  ["3", "5", "7"],
];

TTTGame.prototype.play = function() {
  this.displayWelcome();
  this.board.displayBoard();
  
  while (true) {
    this.humanPlays();
    if (this.gameOver()) break;
    this.board.displayBoard();

    this.computerPlays();
    if (this.gameOver()) break;
    this.board.displayBoard();
  }

  this.displayWinner();
  this.displayGoodbye();
}

TTTGame.prototype.displayWelcome = function() {
  console.log("Welcome to Tic Tac Toe!");
}

TTTGame.prototype.displayGoodbye = function() {
  console.log("Thanks for playing!");
}

TTTGame.prototype.displayWinner = function() {
  if (this.isWinner(this.human)) {
    console.log('Congatulations, you won!');
  } else if (this.isWinner(this.computer)) {
    console.log('You lose!');
  } else {
    console.log("It's a tie!");
  }
}

TTTGame.prototype.gameOver = function() {
  return this.board.isFull() || this.someoneWon();
}

TTTGame.prototype.someoneWon = function() {
  return this.isWinner(this.human) || this.isWinner(this.computer);
}

TTTGame.prototype.isWinner = function(player) {
  return TTTGame.POSSIBLE_WINNING_COMBINATIONS.some(row => {
    return this.board.countMarkersFor(player, row) === 3;
  });
}

TTTGame.prototype.humanPlays = function() {
  let availableSquares = this.board.unusedSquares();
  let choice;

  while (true) {
    choice = readline.question(`Please enter a number ${availableSquares.join(", ")}: `);
    if (choice >= '1' && choice <= '9') break;
    else {
      console.log("Please enter a valid number.");
    }
  }

  // set the square to human marker
  this.board.setMarker(choice, this.human.getMarker());
}

TTTGame.prototype.computerPlays = function() {
  let availableSquares = this.board.unusedSquares();
  let choice = availableSquares[Math.floor(Math.random() * availableSquares.length)];
  this.board.setMarker(choice, this.computer.getMarker());
}

let newGame = new TTTGame();
newGame.play();
