// Greet 1

function greet(greeting) {
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet();              // logs: undefined, world!
                      // should log: Hello, world!

function greet(greeting = "Hello") {
  console.log(greeting + ', world!');
}


// Greet 2

function greet(greeting = "Hello", who = "world") {
  console.log(greeting + ', ' + who + '!');
}

greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!


// Greet 3

function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet() {
  console.log(greeting() + ', ' + recipient() + '!');
}


// CALCULATE BMI

bmi = weightInKilograms / heightInMeters**2;

calculateBMI(180, 80); // "24.69"

function BMI(heightInCentimeters, weightInKilograms) {
  let bmi = weightInKilograms / (heightInCentimeters / 100) ** 2;
  return bmi.toFixed(2);
}


// CALCULATE CAT AGE

// The first human year corresponds to 15 cat years.
// The second human year corresponds to 9 cat years.
// Every subsequent human year corresponds to 4 cat years.

catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32

function catAge(age) {
  switch (age) {
    case 0: return 0;
    case 1: return 15;
    case 2: return 24;
    default: return 24 + ((age - 2) * 4);
  }
}


// REMOVE LAST CHAR

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'

function removeLastChar(string) {
  return string.slice(0, string.length - 1);
}


// ARROW FUNCTIONS (PART 1)

const template = 'I VERB NOUN.';

function sentence(verb, noun) {
  return template
    .replace('VERB', verb)
    .replace('NOUN', noun);
}

console.log(sentence('like', 'birds'));
// logs: I like birds.

const template = 'I VERB NOUN.';

let sentence = (verb, noun) => template
  .replace('VERB', verb)
  .replace('NOUN', noun);

console.log(sentence('like', 'birds'));
// logs: I like birds.


// ARROW FUNCTIONS (PART 2)


let initGame = function () {
  return {
    level: 1,
    score: 0
  }
};

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);

let initGame = () => { return { level: 1, score: 0} };

let initGame = () => ({ level: 1, score: 0});