const readline = require('readline-sync');
const RULES = `==== ROCK / PAPER / SCISSORS / LIZARD / SPOCK ====

  Choose one: 
            (r) for rock 
            (p) for paper
            (s) for scissors
            (l) for lizard
            (k) for spock

  And remember that:
  Scissors decapitate Scissors cuts paper, paper covers rock, rock crushes
  lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates
  lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as
  it always has, rock crushes scissors.
  -------------------------------------------
  Series is best of 5 games, first to 3 wins.
`;
const CHOICES = {
  r: { long: 'rock', wins: ['scissors', 'lizard'] },
  p: { long: 'paper', wins: ['rock', 'spock'] },
  s: { long: 'scissors', wins: ['paper', 'lizard'] },
  l: { long: 'lizard', wins: ['spock', 'paper'] },
  k: { long: 'spock', wins: ['scissors', 'rock'] }
};
const WINNING_SETS = 3;
const SCORE = { user: 0, computer: 0 };
const VALID_YES_NO = ['y', 'n', 'yes', 'no'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function getPlayerChoice(turn) {
  let shortChoice = readline.question(console.log(`
  ----------------------------------------------------------------------------
  Turn ${turn}. Your choice: (r)ock, (p)aper, (s)cissors, (l)izard or spoc(k)`));

  shortChoice = convertLongToShortChoice(shortChoice.toLowerCase());

  while (!(shortChoice in CHOICES)) {
    shortChoice = readline.question(prompt("That's not a valid choice"));
    shortChoice = convertLongToShortChoice(shortChoice);
  }

  return shortChoice;
}

function displayWinner(shortChoice, computerChoice) {
  let choiceKey = CHOICES[shortChoice];
  prompt(`You chose ${choiceKey.long}, computer chose ${computerChoice}`);

  if (choiceKey.wins.includes(computerChoice)) {
    prompt('You win!');
  } else if (choiceKey.long === computerChoice) {
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
  if (userScore === WINNING_SETS) {
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

function resetScore() {
  SCORE.user = 0;
  SCORE.computer = 0;
}

// It checks if player entered the full name of the play (rock, paper,...)
// If it is the case, we return the short equivalent
function convertLongToShortChoice(string) {
  if (string.length !== 1) {
    if (Object.keys(CHOICES).includes(string[0])) {
      if (string === CHOICES[string[0]].long) {
        string = string[0];
        return string;
      }
    }
  }
  return string;
}

function playAgain(displayText) {
  let goOn = readline.question(prompt(displayText)).toLowerCase();
  while (!VALID_YES_NO.includes(goOn)) {
    goOn = readline.question(prompt('Please enter "y" or "n".')).toLowerCase();
  }
  return goOn[0] === 'y';
}

do {
  resetScore();
  let turn = 1;

  do {
    console.clear();
    prompt(` ${RULES}
    -----------------------
    PLAYER: ${SCORE.user} / COMPUTER: ${SCORE.computer}
    -----------------------
  `);

    let shortChoice = getPlayerChoice(turn);

    let randomIndex = Math.floor(Math.random() * Object.keys(CHOICES).length);
    let computerChoiceShort = Object.keys(CHOICES)[randomIndex];
    let computerChoice = CHOICES[computerChoiceShort].long;

    turn += 1;

    displayWinner(shortChoice, computerChoice);
    updateScore(shortChoice, computerChoice);

  } while ((SCORE.user < WINNING_SETS && SCORE.computer < WINNING_SETS) &&
            playAgain('Do you want to continue (y/n)?'));

  displaySeriesWinner(SCORE.user, SCORE.computer);

} while (playAgain('Do you want to play another series (y/n)?'));

prompt(`Thanks for playing!`);
