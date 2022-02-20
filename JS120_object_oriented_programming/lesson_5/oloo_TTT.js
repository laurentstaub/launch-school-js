const readline = require("readline-sync");

let Square = {
  UNUSED_SQUARE:   " ",
  HUMAN_MARKER:    "X",
  COMPUTER_MARKER: "O",

  init(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
    return this;
  },

  toString() { return this.marker; },
  setMarker(marker) { this.marker = marker; },
  isUnused() { return this.marker === Square.UNUSED_SQUARE; },
  getMarker() { return this.marker; },
};


let Player = {
  initialize(marker) {
    this.marker = marker;
    return this;
  },

  getMarker() {
    return this.marker;
  },
}


let Human = Object.create(Player).initialize();

Human.init = function() {
  return this.initialize(Square.HUMAN_MARKER);
}

let Computer = Object.create(Player).initialize();

Computer.init = function() {
  return this.initialize(Square.COMPUTER_MARKER);
}


let Board = {
  init() {
    this.squares = {};
    for (let index = 1; index <= 9; index += 1) {
      this.squares[String(index)] = Object.create(Square).init();
    }
    return this;
  },

  displayBoard() {
    console.log(``);
    console.log(`     |     |     `);
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}  `);
    console.log(`     |     |     `);
    console.log(`-----|-----|-----`);
    console.log(`     |     |     `);
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}  `);
    console.log(`     |     |     `);
    console.log(`-----|-----|-----`);
    console.log(`     |     |     `);
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}  `);
    console.log(`     |     |     `);
    console.log(``);
  },

  markSquareAt(key, marker) {
    this.squares[String(key)].setMarker(marker);
  },

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused());
  },

  isFull() {
    return this.unusedSquares().length === 0;
  },
};


let TTTGame = {
  WINNING_COMBINATIONS: [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["3", "6", "9"],
    ["1", "5", "9"],
    ["3", "5", "7"],
  ],

  init() {
    this.board = Object.create(Board).init();
    this.human = Object.create(Human).init();
    this.computer = Object.create(Computer).init();
    return this;
  },

  play() {
    this.displayWelcomeMessage();
    this.board.displayBoard();

    while (true) {
      this.humanPlays();
      if (this.board.isFull() || this.someoneWon()) break;
      this.board.displayBoard();
      this.computerPlays();
      if (this.board.isFull() || this.someoneWon()) break;
      this.board.displayBoard();
    }
    
    this.displayWinner();
    this.displayGoodbyeMessage();
  },

  displayWelcomeMessage() {
    console.log("Welcome to Tic Tac Toe!"); 
  },

  displayGoodbyeMessage() {
    console.log("Thanks for playing!");
  },

  displayWinner() {
    if (this.isWinner(this.human)) {
      console.log('Congratulations! You won.');
    } else if (this.isWinner(this.computer)) {
      console.log('Computer won!')
    } else {
      console.log("It's a tie!");
    }
  },

  humanPlays() {
    let choice;
    let unusedChoices = this.board.unusedSquares();

    while (true) {
      choice = readline.question(`Please chose a square, ${unusedChoices}: `);
      if (unusedChoices.includes(choice)) break;
    }
    
    this.board.markSquareAt(choice, this.human.getMarker());
  },

  computerPlays() {
    console.log(this.board.squares);
    let unusedChoices = this.board.unusedSquares();
    let random = Math.floor(Math.random() * unusedChoices.length);
    let randomPlay = unusedChoices[random];

    this.board.markSquareAt(randomPlay, this.computer.getMarker());
  },

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  },

  isWinner(player) {
    return TTTGame.WINNING_COMBINATIONS.some(combi => {
      return combi.every(key => this.board.squares[key].getMarker() === player.getMarker());
    })
  }

};

let game = Object.create(TTTGame).init();
game.play();