const data = {
  'Rock': 1,
  'Paper': 1,
  'Scissors': 10,
  'Lizard': 1,
  'Spock': 1,
};

function randomize(object) {

  let totalWeight = Object.values(data).reduce((acc, val) => acc + val, 0);
  const randomNumber = Math.random() * totalWeight;

  let runningTotal = 0;
  
  for (let play in object) {
    runningTotal += object[play];
    if (runningTotal >= randomNumber) return play;
  }
}

console.log(randomize(data));