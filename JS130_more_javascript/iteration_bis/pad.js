/*
function foo(condition) {
  let bar;
  console.log(bar);

  let qux = 0.5772;

  if (condition) {
    let qux = 3.1415;
    console.log(qux);
  } else {
    bar = 24;

    var xyzzy = function() {
      let qux = 2.7183;
      console.log(qux);
    };

    console.log(qux);
    console.log(xyzzy());
  }

  qux = 42;
  console.log(qux);
}

foo(true);
foo(false);


function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

let Image;
var catImage;
var pudding;

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

Image = class {
  constructor(file) {
    this.file = file;
  }
}

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);


"use strict"

const SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9",
         "10", "Jack", "Queen", "King", "Ace"];

function createDeck() {
  const allCards = () => {
    return SUITS.reduce((deck, suit) => {
      RANKS.forEach(rank => deck.push(`${rank} of ${suit}`));
      return deck;
    }, []);
  };

  let deck = allCards();
  shuffle(deck);

  return deck;
}

function shuffle(deck) {
  for (let counter = 0; counter < 400; counter += 1) {
    let randomIndex1 = randomCardIndex();
    let randomIndex2 = randomCardIndex();
    let tempCard = deck[randomIndex1];
    deck[randomIndex1] = deck[randomIndex2];
    deck[randomIndex2] = tempCard;
  }

  function randomCardIndex() {
    return Math.floor(Math.random() * deck.length);
  }
}

console.log(createDeck());


function makeMultipleLister(nb) {
  let index = nb;

  return function() {
    while(index < 100) {
      console.log(index);
      index += nb;
    }
  }
}

let lister = makeMultipleLister(17);
lister();


let total = 0;

function add(number) {
  total += number;
  console.log(total);
}

function subtract(number) {
  total -= number;
  console.log(total);
}

add(1);       // 1
add(42);      // 43
subtract(39); // 4
add(6);       // 10


let prod = 2

function (factor) {
  prod *= factor;
  return prod;
};

//                    prod     factor    start     result
//                     2          ?        2         ?
// result bar(3)       6          3        2         6
// result bar(4)      24          4        2         30
// result bar(5)     120          5        2         150


Write a function named later that takes two arguments:
a function and an argument for that function. 
The return value should be a new function that calls the input 
function with the provided argument, like this:


function later(callback, arg) {
  return function() {
    callback(arg);
  };
}

const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!


function later2(callback, arg1) {
  return function(arg2) {
    callback(arg1, arg2);
  };
}

const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!


"use strict";

function bind(context, func) {
  return function() {
    func.call(context);
  }
}

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }

function makeCounterLogger(start) {
  return function(end) {
    let number = start;
    console.log(number);

    do {
      if (end > number) {
        number += 1;
        console.log(number);
      } else {
        number -= 1;
        console.log(number);
      }
    } while (number !== end);

  }
}

let countlog = makeCounterLogger(5);
countlog(8);
console.log("////////");
countlog(2);
*/