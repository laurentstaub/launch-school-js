// math_module.js
let numbers = [];

function square(value) {
  return value * value;
}

function addNumber(value) {
  numbers.push(value);
}

function getNumbers() {
  return [...numbers];
}

function sumOfSquares() {
  return getNumbers().reduce((sum, number) => {
    return square(number) + sum;
  });
}

module.exports = {
  addNumber,
  sumOfSquares,
};