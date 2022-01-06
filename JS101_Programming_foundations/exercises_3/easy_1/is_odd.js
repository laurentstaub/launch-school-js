// const isOdd = number => Math.abs(number % 2) === 1;
const isOdd = number => number % 2 === 1 || number % 2 === -1;

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true