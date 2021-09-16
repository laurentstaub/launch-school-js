
const readline = require('readline-sync');

const FIRST_PLAYER_MODES = { p: "player", c: "computer", h: "choose", r: "random"};
const PLAYERS = ["player", "computer"]
const FIRST_PLAYER_MODE = 'random';
const VALID_YES_OR_NO = ['y', 'yes', 'n', 'no'];

const INITIAL_MARK = ' ';
const HUMAN_MARK = 'X';
const COMPUTER_MARK = 'O';
const CENTRAL_SQUARE = 5;

const WINNING_GAMES = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];

const score = {
  player: 0,
  computer: 0,
}

function prompt(text) {
  console.log(`=> ${text}`);
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARK);
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

  console.log(`
*************** TIC TAC TOE *****************
  
Winner is the first to win ${WINNING_GAMES} games.`);
  console.log(`First player mode is ${FIRST_PLAYER_MODE}.`)
  console.log(`You are ${HUMAN_MARK}. Computer is ${COMPUTER_MARK}.`);

  console.log(`
       |     |
    ${board['1']}  |  ${board['2']}  |  ${board['3']}  
       |     |
  -----+-----+-----
       |     |
    ${board['4']}  |  ${board['5']}  |  ${board['6']}  
       |     |
  -----+-----+-----
       |     |
    ${board['7']}  |  ${board['8']}  |  ${board['9']}  
       |     |
  `);
}

function welcomePlayer() {
  console.log(`
  *************** TIC TAC TOE *****************
  
  Welcome to Tic Tac Toe. The winner will the first to win ${WINNING_GAMES} games
      `);
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARK;
  }
  return board;
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === "player" ? "computer" : "player";
}

function chooseFirstPlayer() {
  while (true) {
    prompt(`Choose who is going to start (p)layer or (c)omputer:`);
    let answer = readline.question().trim().toLowerCase();
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

  board[square] = HUMAN_MARK;
}

function computerChoosesSquare(board) {
  let square;

  if (!!checkThreat(board, COMPUTER_MARK) === true) {
    square = checkThreat(board, COMPUTER_MARK);
  } else if (!!checkThreat(board, HUMAN_MARK) === true) {
    square = checkThreat(board, HUMAN_MARK);
  } else if (board[CENTRAL_SQUARE] === INITIAL_MARK) {
    square = CENTRAL_SQUARE;
  } else {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARK;
}

function checkThreat(board, MARK) {
  for (let index = 0; index < WINNING_LINES.length; index += 1) {
    let modArray = WINNING_LINES[index].map(element => {
      return board[element];
    });

    if (modArray.filter(element => element === MARK).length === 2) {
      let spaceIndex = modArray.findIndex(element => {
        return element === INITIAL_MARK;
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
    if (WINNING_LINES[line].every(nb => board[nb] === HUMAN_MARK)) {
      return 'Player';
    } else if (WINNING_LINES[line].every(nb => board[nb] === COMPUTER_MARK)) {
      return 'Computer';
    }
  }

  return null;
}

function incrementScore(board) {
  if(someoneWon(board) === true) {
    if (detectWinner(board) === 'Player') {
      score.player += 1;
    } else {
      score.computer += 1;
    }
  }
}

function displayWinner(board) {
  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won the game!`);
  } else {
    prompt("It's a tie!");
  }
}

function displayScore() {
  console.log(`
  -----------SCOREBOARD-----------
  Player score: ${score.player}
  Computer score: ${score.computer}
  --------------------------------
  `);
}

function displayOverallwinner() {
  if (score.player === WINNING_GAMES) {
    console.log(`

__   __                                _ 
\\ \\ / /__  _   _  __      _____  _ __ | |
\\ V / _ \\| | | | \\ \\ /\\ / / _ \\| '_ \\| |
| | (_) | |_| |  \\ V  V / (_) | | | |_|
|_|\\___/ \\__,_|   \\_/\\_/ \\___/|_| |_(_)

    `);
  } else if (score.computer === WINNING_GAMES) {
    console.log(`
    You've been terminated...
    Computer won! :(
    `);
  }
}

function playAgain(question) {
  prompt(question);
  let answer = readline.question().toLowerCase();
  while (!VALID_YES_OR_NO.includes(answer)) {
    prompt('Please input a valid answer: "y" for yes, or "n" for no');
    answer = readline.question().toLowerCase();
  }

  return answer;
}

let answerMatch = 'y';

do {
  let firstPlayer = FIRST_PLAYER_MODE;
  let answer = 'y';

  do {
    console.clear();
    welcomePlayer();
    let board = initializeBoard();

    if (FIRST_PLAYER_MODE === "choose") {
      firstPlayer = chooseFirstPlayer();
    } else if (FIRST_PLAYER_MODE === "random") {
      firstPlayer = PLAYERS[Math.floor(Math.random() * PLAYERS.length)];
    }
    let currentPlayer = firstPlayer;

    do {
      displayBoard(board);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
    } while (!someoneWon(board) && !boardFull(board))

    displayBoard(board);
    incrementScore(board);
    displayWinner(board);
    displayScore();

    if (score.player === WINNING_GAMES || score.computer === WINNING_GAMES) {
      displayOverallwinner();
      break;
    }

    answer = playAgain('Do you want to continue? y/n');
  } while (answer === 'y');

  answerMatch = playAgain(`Do you want to start a new match (first to ${WINNING_GAMES})? y/n`);
} while (answerMatch === 'y');

prompt('Thanks for playing Tic Tac Toe!');