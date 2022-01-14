/*
Calculate the loss rate for a certain type of move

Rules
 - If a play has been played at least 3 times and 

Input 1: this.computer.moveHistory

{
  play 1: [rock, loss],
  play 2: [paper, win],
  play 3: [rock, loss],
  play 4: [rock, loss],
  play 5: [rock, loss],
}

Output: an object with the win rate for each type of move

{ 
  rock: 0%,
  paper: 100%,
  scissors: null,
  spock: null,
  lizard: null,
}

ALGORITHM
count the plays for each play type
count the wins for each play type
*/

const playHistory = {
  'play 1': ['rock', 'loss'],
  'play 2': ['paper', 'win'],
  'play 3': ['rock', 'loss'],
  'play 4': ['rock', 'loss'],
  'play 5': ['rock', 'loss'],
}

function winRates(playHistory) {
  let result = { 
    rock: { games: 0, wins: 0},
    paper:  { games: 0, wins: 0},
    scissors:  { games: 0, wins: 0},
    spock:  { games: 0, wins: 0},
    lizard:  { games: 0, wins: 0},
  };

  for (let play in playHistory) {
    let playMove = playHistory[play][0];
    let playResult = playHistory[play][1];

    result[playMove].games += 1;
    if (playResult === 'W') result[playMove].wins += 1;
  }

  for (let move in result) {
    // we want at least 3 games to start getting the stats
    if (result[move].games < 3) result[move] = null;
    else result[move] = result[move].wins / result[move].games;
  }

  return result;
}

console.log(winRates(playHistory));
let playRates = winRates(playHistory);

function getProbabilityWeights(playRates) {
  for (let play in playRates) {
    if (playRates[play] === null) playRates[play] = 10;
    else if (playRates[play] < 0.4 ) playRates[play] = 4;
    else playRates[play] = 10;
  }

  return playRates;
}

let playWeights = getProbabilityWeights(playRates);

function randomize(playWeights) {

  let totalWeight = Object.values(playWeights).reduce((acc, val) => acc + val, 0);
  const randomNumber = Math.random() * totalWeight;

  let runningTotal = 0;
  
  for (let play in playWeights) {
    runningTotal += playWeights[play];
    if (runningTotal >= randomNumber) return play;
  }
}

function test(nbTests) {
  let results = { 
    rock: 0,
    paper: 0,
    scissors: 0,
    spock: 0,
    lizard: 0,
  }
  
  for (let index = 1; index < nbTests; index += 1) {
    let answer = randomize(playWeights);
    results[answer] += 1;
  }

  return results;
}

console.log(test(10000));