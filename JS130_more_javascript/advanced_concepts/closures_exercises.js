/*
let counter = 0;

function makeCounter() {
  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
console.log(incrementCounter());
console.log(incrementCounter());

incrementCounter = makeCounter();
console.log(incrementCounter());
console.log(incrementCounter());


function makeCounter() {
  return function() {
    let counter = 0;
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
console.log(incrementCounter());
console.log(incrementCounter());

incrementCounter = makeCounter();
console.log(incrementCounter());
console.log(incrementCounter());


function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
console.log(incrementCounter());
console.log(incrementCounter());

incrementCounter = makeCounter();
console.log(incrementCounter());
console.log(incrementCounter());


function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter1 = makeCounter();
let incrementCounter2 = makeCounter();

console.log(incrementCounter1());
console.log(incrementCounter1());

console.log(incrementCounter2());
console.log(incrementCounter2());


function makeMultipleLister(number) {
  return function() {
    let multiple = number;

    while (number < 100) {
      console.log(number);
      number += multiple;
    }
  }
}

let lister = makeMultipleLister(17);
lister();


let runningTotal = 0;

function add(num) {
  runningTotal += num;
}

function substract(num) {
  runningTotal -= num;
}

add(1);
console.log(runningTotal);
add(42);
console.log(runningTotal);
substract(39);
console.log(runningTotal);
add(6);
console.log(runningTotal);


function foo(start) {
  let prod = start;

  return function (factor) {
    prod *= factor;
    return prod;
  };
}

let bar = foo(2); // start = 2
let result = bar(3); // start = 6 result = 6
result += bar(4); // start = 24 result = 30
result += bar(5); // start = 120 result = 150
console.log(result);


function later(callback, argument) {
  return callback.bind(null, argument);
}

const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!


function later2(callback, argument1) {
  return function(argument2) {
    callback(argument1, argument2);
  };
}

const notify = function(message, when) {
  console.log(`${message} in ${when} mnutes`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30);
*/

"use strict";

function bind(context, func) {
  return function() {
    func.call(context);
  };
}

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj);