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


function makeList() {
  let todoList = [];

  return function(todo) {
    if (todo === undefined) {
      if (todoList.length === 0) console.log("The list is empty");
      else {
        todoList.forEach(todo => console.log(todo));
      }
    } else {
      if (todoList.includes(todo)) {
        todoList.splice(todoList.indexOf(todo), 1);
        console.log(`${todo} removed!`);
      } else {
        todoList.push(todo);
      }
    }
  }
}

let list = makeList();
list();
list("Get up!");
list();
list("Stand up!");
list();
list("Get up!");


function makeList() {
  let todoList = [];
  
  return {
    list() {
      todoList.forEach(todo => console.log(todo));
    },

    add(todo) {
      todoList.push(todo);
      console.log(`${todo} added`);
    },

    remove(todo) {
      todoList.splice(todoList.indexOf(todo), 1);
      console.log(`${todo} removed!`);
    },
  };
}

let list = makeList();
list.add("Stand up for your rights");
list.list();
list.add("Get up!");
list.list();
list.remove("Getup!");
list.list();

console.log(list.todoList);


var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];

sum += (function sum(numbers) {
  return numbers.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
})(numbers);  // ?

console.log(sum);


(function(countFrom) {
  for (let index = countFrom; index >= 0; index -= 1) {
    console.log(index);
  }
})(7);


let bar = (function(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
})(2);

let result = bar(3);
result += bar(4);
result += bar(5);
console.log(result);


(function countdown(countFrom) {
  if (countFrom > 0) {
    console.log(countFrom);
    countdown(countFrom - 1);
  } else {
    console.log(countFrom);
  }
})(7);


function product() {
  let numbers = Array.from(arguments);
  return numbers.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);



function qux() {
  let animalType = "cat";
  let age = 9;
  let colors = ["black", "white"];
  // missing code
  return {
    type: animalType,
    age,
    colors,
  }
}

let { type, age, colors } = qux();
console.log(type);    // cat
console.log(age);     // 9
console.log(colors);  // [ 'black', 'white' ]
*/

function func(first, two, three, four, last) {
  return {
    first,
    last,
    middle: [two, three, four],
  }
}

let array = [1, 2, 3, 4, 5];
console.log(func(...array));