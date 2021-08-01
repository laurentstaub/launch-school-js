const readline = require('readline-sync');

const CHOICES = {
  r: { long: 'rock', wins: ['scissors', 'lizard'] },
  p: { long: 'paper', wins: ['rock', 'spock'] },
  s: { long: 'scissors', wins: ['paper', 'lizard'] },
  l: { long: 'lizard', wins: ['spock', 'paper'] },
  k: { long: 'spock', wins: ['scissors', 'rock'] }
};

const WINNING_SETS = 3;
const SCORE = {
  user: 0,
  computer: 0
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(shortChoice, computerChoice) {
  prompt(`You chose ${CHOICES[shortChoice].long}, computer chose ${computerChoice}`);

  if (CHOICES[shortChoice].wins.includes(computerChoice)) {
    prompt('You win!');
  } else if (CHOICES[shortChoice].long === computerChoice) {
    prompt("It's a tie");
  } else {
    prompt("Computer wins!");
  }
}

function updateScore(shortChoice, computerChoice) {
  if (CHOICES[shortChoice].wins.includes(computerChoice)) {
    SCORE.user += 1;
  } else if (CHOICES[shortChoice].long !== computerChoice) {
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
  // We clean-up to prepare for the series start
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

    while (!(shortChoice in CHOICES)) {
      shortChoice = readline.question(prompt("That's not a valid choice"));
    }

    // we chose a random choice for the computer
    let randomIndex = Math.floor(Math.random() * Object.keys(CHOICES).length);
    let computerChoiceShort = Object.keys(CHOICES)[randomIndex];
    let computerChoice = CHOICES[computerChoiceShort].long;
    turn += 1;

    displayWinner(shortChoice, computerChoice);
    updateScore(shortChoice, computerChoice);
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
      .question(prompt('Please enter "y" or "n".'))
      .toLowerCase();
  }

} while (answerContinue[0] === 'y');
