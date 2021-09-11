
const readline = require('readline-sync');

const FIRST_PLAYER_MODES = { p: "player", c: "computer", h: "choose"};
const FIRST_PLAYER_MODE = 'choose';
const VALID_YES_OR_NO = ['y', 'Y', 'n', 'N'];

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

const WINNING_GAMES = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];

function prompt(text) {
  console.log(`=> ${text}`);
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function joinOr(array, separator1 = ", ", separator2 = "or") {
  switch (array.length) {
    case 0: return "";
    case 1: return array[0];
    case 2: return array[0] + " " + separator2 + " " + array[1];
    default:
      return array.slice(0, array.length - 1).join(separator1)
        + separator1
        + separator2
        + " "
        + array[array.length - 1];
  }
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}  `);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === "player" ? "computer" : "player";
}

function chooseFirstPlayer() {
  while (true) {
    prompt(`Choose who is going to start (p)layer or (c)omputer:`);
    let answer = readline.question().trim();
    if (answer === "p") {
      return FIRST_PLAYER_MODES[answer];
    } else if (answer === "c") {
      return FIRST_PLAYER_MODES[answer];
    } else {
      prompt(`Please answer "p" or "c".`);
    }
  }
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === "player") playerChoosesSquare(board);
  if (currentPlayer === "computer") computerChoosesSquare(board);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let square;

  if (!!checkThreat(board, COMPUTER_MARKER) === true) {
    square = checkThreat(board, COMPUTER_MARKER);
  } else if (!!checkThreat(board, HUMAN_MARKER) === true) {
    square = checkThreat(board, HUMAN_MARKER);
  } else if (board[5] === INITIAL_MARKER) {
    square = 5;
  } else {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function checkThreat(board, marker) {
  for (let index = 0; index < WINNING_LINES.length; index += 1) {
    let modArray = WINNING_LINES[index].map(element => {
      return board[element];
    });

    if (modArray.filter(element => element === marker).length === 2) {
      let spaceIndex = modArray.findIndex(element => {
        return element === INITIAL_MARKER;
      });
      if (spaceIndex !== -1) {
        return WINNING_LINES[index][spaceIndex];
      }
    }
  }

  return null;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

while (true) {
  let playerScore = 0;
  let computerScore = 0;
  let firstPlayer = FIRST_PLAYER_MODE;

  while (true) {
    let board = initializeBoard();
    if (FIRST_PLAYER_MODE === "choose") {
      firstPlayer = chooseFirstPlayer();
    }
    let currentPlayer = firstPlayer;

    while (true) {
      displayBoard(board);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board);

    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won the game!`);
      if (detectWinner(board) === 'Player') {
        playerScore += 1;
      } else {
        computerScore += 1;
      }
    } else {
      prompt("It's a tie!");
    }

    console.log('');
    console.log(`-----------SCOREBOARD-----------`);
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
    console.log(`--------------------------------`);
    console.log('');

    if (playerScore === WINNING_GAMES) {
      console.log('You won!');
      break;
    } else if (computerScore === WINNING_GAMES) {
      console.log('Computer won!');
      break;
    }

    prompt('Would you like to play again? y/n');
    let answer = readline.question().toLowerCase();
    while (!VALID_YES_OR_NO.includes(answer)) {
      prompt('Please input a valid answer: "y" for yes, or "n" for no');
      answer = readline.question().toLowerCase();
    }
    if (answer !== 'y') break;
  }

  prompt(`Would you like to start a new match (first to ${WINNING_GAMES})? y/n`);
  let answer = readline.question().toLowerCase();
  while (!VALID_YES_OR_NO.includes(answer)) {
    prompt('Please input a valid answer: "y" for yes, or "n" for no');
    answer = readline.question().toLowerCase();
  }
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');