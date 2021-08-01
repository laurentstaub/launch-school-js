const readline = require('readline-sync');
const VALID_CHOICES = ['r', 'p', 's', 'l', 'k'];
const FULL_NAME_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const WINNING_CHOICES = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock']
};
const WINNING_SETS = 3;
const SCORE = {
  user: 0,
  computer: 0
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (WINNING_CHOICES[choice].includes(computerChoice)) {
    prompt('You win!');
  } else if (choice === computerChoice) {
    prompt("It's a tie");
  } else {
    prompt("Computer wins!");
  }
}

function updateScore(choice, computerChoice) {

  if (WINNING_CHOICES[choice].includes(computerChoice)) {
    SCORE.user += 1;
  } else if (choice !== computerChoice) {
    SCORE.computer += 1;
  }
}

function displaySeriesWinner(userScore) {
  if (userScore === 3) {
    prompt(`
Congratulations, you won ${SCORE.user} to ${SCORE.computer}!
__   __                                _ 
\\ \\ / /__  _   _  __      _____  _ __ | |
 \\ V / _ \\| | | | \\ \\ /\\ / / _ \\| '_ \\| |
  | | (_) | |_| |  \\ V  V / (_) | | | |_|
  |_|\\___/ \\__,_|   \\_/\\_/ \\___/|_| |_(_)

    `);
  } else {
    prompt(`You lost ${SCORE.computer} to ${SCORE.user}...`);
  }
}

let answerContinue = 'n';

do {
  // We clean-up to prepare for the game start
  console.clear();
  SCORE.user = 0;
  SCORE.computer = 0;
  let turn = 1;
  prompt(`==== ROCK / PAPER / SCISSORS / LIZARD / SPOCK ====`);
  prompt(`Choose one: 
              (r) for rock 
              (p) for paper
              (s) for scissors
              (l) for lizard
              (k) for spock`);
  prompt(`Series is best of 5 games, first to 3 wins.`);

  do {

    let shortChoice = readline.question(console.log(`

------------------------------------
Turn ${turn}. Your choice: r, p, s, l or k`));

    while (!VALID_CHOICES.includes(shortChoice)) {
      shortChoice = readline.question(prompt("That's not a valid choice"));
    }

    let choice = FULL_NAME_CHOICES[VALID_CHOICES.indexOf(shortChoice)];
    let randomIndex = Math.floor(Math.random() * FULL_NAME_CHOICES.length);
    let computerChoice = FULL_NAME_CHOICES[randomIndex];
    turn += 1;

    displayWinner(choice, computerChoice);
    updateScore(choice, computerChoice);
    prompt(`

      -----------------------
      PLAYER: ${SCORE.user} / COMPUTER: ${SCORE.computer}
      -----------------------
    `);

  } while (SCORE.user < WINNING_SETS && SCORE.computer < WINNING_SETS);

  displaySeriesWinner(SCORE.user, SCORE.computer);

  answerContinue = readline
    .question(prompt('Do you want to play again (y/n)?'))
    .toLowerCase();

  while (answerContinue[0] !== 'n' && answerContinue[0] !== 'y') {

    answerContinue = readline
      .question()
      .toLowerCase(prompt('Please enter "y" or "n".'));
  }

} while (answerContinue[0] === 'y');
