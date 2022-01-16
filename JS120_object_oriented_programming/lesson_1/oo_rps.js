const readline = require('readline-sync');

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  playCount: 0,
  winningPoints: 5,
  winner: null,

  bannerMessage() {
    console.clear();
    console.log(`
================================================================================
                Welcome to Rock, Paper, Scissors, Spock, Lizard!

  The rules are simple, but in case you need a quick refresher (you're only
  human after all): Scissors cuts Paper covers Rock crushes Lizard poisons 
  Spock smashes Scissors decapitates Lizard eats Paper disproves Spock vaporizes
  Rock crushes Scissors. See? That was easy. Apparently, this makes sense to
  you. It doesn't to me.

                            FULL GAME IS FIRST TO 5

                          ********** SCORE *********
                             Human: ${this.human.score} / Computer: ${this.computer.score}
                          **************************
                      
                                 Play History

             Play            | Human           | Computer
            -----------------+-----------------+-----------------`);
    this.logHistory();

    console.log(`
================================================================================`);
  },

  logHistory() {
    const padString = string => string.padEnd(14, " ");

    for (let play in this.human.moveHistory) {
      let humanMoves = this.human.moveHistory[play];
      let computerMoves = this.computer.moveHistory[play];

      let displayHuman = `${humanMoves[0]} (${humanMoves[1]})`;
      let displayComputer = `${computerMoves[0]} (${computerMoves[1]})`;

      let humanHistory = padString(displayHuman);
      let computerHistory = padString(displayComputer);
      let paddedPlay = padString(play);

      console.log(
        `              ${paddedPlay} |  ${humanHistory} |  ${computerHistory}`);
    }
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors, Spock, Lizard. Goodbye!\n');
  },

  determineWinner() {
    const WIN_OVER = {
      rock: ['scissors', 'lizard'],
      paper: ['rock', 'spock'],
      scissors: ['paper', 'lizard'],
      spock: ['rock', 'scissors'],
      lizard: ['paper', 'spock'],
    };

    let hMove = this.human.move;
    let cMove = this.computer.move;

    if (WIN_OVER[hMove].includes(cMove)) this.winner = 'human';
    else if (WIN_OVER[cMove].includes(hMove)) this.winner = 'computer';
    else this.winner = 'tie';
  },

  incrementScore() {
    if (this.winner === 'human') this.human.score += 1;
    else if (this.winner === 'computer') this.computer.score += 1;
  },

  updateMoveHistory() {
    let play = `play ${RPSGame.playCount}`;

    if (this.winner === 'human') {
      this.human.moveHistory[play].push('W');
      this.computer.moveHistory[play].push('L');
    } else if (this.winner === 'computer') {
      this.human.moveHistory[play].push('L');
      this.computer.moveHistory[play].push('W');
    } else {
      this.human.moveHistory[play].push('T');
      this.computer.moveHistory[play].push('T');
    }
  },

  displayWinner() {
    console.log(`\n You chose: ${this.human.move}`);
    console.log(` The computer chose: ${this.computer.move}\n`);

    if (this.winner === 'human') {
      console.log(` You WIN! Score is Player ${this.human.score} / Computer ${this.computer.score}\n`);
    } else if (this.winner === 'computer') {
      console.log(` I win. Score is Player ${this.human.score} / Computer ${this.computer.score}\n`);
    } else {
      console.log(` It's a tie! Score is Player ${this.human.score} / Computer ${this.computer.score}\n`);
    }
  },

  displayOverallWinner() {
    if (this.human.score === this.winningPoints) {
      console.log(`
********************************************************************************
              AND IT'S WIN FOR THE HUMAN!!! IT'S A GOOD HUMAN!
********************************************************************************
      `);
    } else {
      console.log(`
********************************************************************************
      YOU LOSE.... I MEAN, COME ON... IT'S PURE LUCK, EVEN YOU CAN DO IT
********************************************************************************
      `);
    }
  },

  messageContinue(message) {
    const validYes = ['yes', 'y'];
    const validNo = ['no', 'n'];

    while (true) {
      let answer = readline.question(message);
      if (validYes.includes(answer.toLowerCase())) return true;
      else if (validNo.includes(answer.toLowerCase())) return false;
      else console.log(" Please enter 'y' or 'n'.");
    }
  },

  reset() {
    this.human.score = 0;
    this.computer.score = 0;
    this.human.moveHistory = {};
    this.computer.moveHistory = {};
    this.playCount = 0;
  },

  play() {
    while (true) {
      this.reset();

      while (this.human.score !== this.winningPoints
             && this.computer.score !== this.winningPoints) {
        this.bannerMessage();
        this.playCount += 1;
        this.human.choose();
        this.computer.choose();
        this.determineWinner();
        this.incrementScore();
        this.updateMoveHistory();
        this.displayWinner();
        if (!this.messageContinue(' Would you like to continue? (y/n): ')) break;
      }

      this.displayOverallWinner();
      if (!this.messageContinue(
        ' Would you like to play again and start a new game? (y/n): '
      )) break;
    }

    this.displayGoodbyeMessage();
  },
};

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {

    lossRates(playHistory) {
      let result = {
        rock: { games: 0, loss: 0},
        paper:  { games: 0, loss: 0},
        scissors:  { games: 0, loss: 0},
        spock:  { games: 0, loss: 0},
        lizard:  { games: 0, loss: 0},
      };

      for (let play in playHistory) {
        let playMove = playHistory[play][0];
        let playResult = playHistory[play][1];

        result[playMove].games += 1;
        if (playResult === 'L') result[playMove].loss += 1;
      }

      for (let move in result) {
        // we want at least 2 games to start getting the stats
        if (result[move].games < 2) result[move] = null;
        else result[move] = result[move].loss / result[move].games;
      }

      return result;
    },

    getProbabilityWeights(playRates) {
      for (let play in playRates) {
        if (playRates[play] === null) playRates[play] = 10;
        else if (playRates[play] > 0.6 ) playRates[play] = 5;
        else playRates[play] = 10;
      }

      return playRates;
    },

    getRandomWeightedPlay(playWeights) {
      let totalWeight = Object
        .values(playWeights)
        .reduce((acc, val) => acc + val, 0);
      const randomNumber = Math.random() * totalWeight;

      let runningTotal = 0;

      for (let play in playWeights) {
        runningTotal += playWeights[play];
        if (runningTotal >= randomNumber) return play;
      }

      return playWeights[playWeights.length - 1];
    },

    choose() {
      let playlossRates = this.lossRates(this.moveHistory);
      let playWeights = this.getProbabilityWeights(playlossRates);
      this.move = this.getRandomWeightedPlay(playWeights);
      this.moveHistory[`play ${RPSGame.playCount}`] = [this.move];
    },
  };

  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choices: {r: 'rock', p: 'paper', s: 'scissors', k: 'spock', l: 'lizard'},

    choose() {
      let choice;

      while (true) {
        choice = readline.question('\n Please choose (r)ock, (p)aper, (s)cissors, spoc(k), (l)izard: ');
        choice = choice.toLowerCase();
        if (Object.values(this.choices).includes(choice)
            || Object.keys(this. choices).includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      if (choice.length === 1) this.move = this.choices[choice];
      else this.move = choice;
      this.moveHistory[`play ${RPSGame.playCount}`] = [this.move];
    },
  };

  return Object.assign(playerObject, humanObject);
}

function createPlayer() {
  return {
    move: null,
    score: 0,
    moveHistory: {},
  };
}

RPSGame.play();