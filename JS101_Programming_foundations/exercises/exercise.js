/*

Problem Description
Given a divisor and a bound, find the largest number N such that:
N is divisible by the divisor
N is less than or equal to the bound
N is greater than 0.

Test Cases
console.log(maxMultiple(2, 7) === 6);
console.log(maxMultiple(3, 10) === 9);
console.log(maxMultiple(7, 17) === 14);
console.log(maxMultiple(10, 50) === 50);
console.log(maxMultiple(37, 200) === 185);
console.log(maxMultiple(7, 100) === 98);

Array.prototype.map
- called on an array
- takes a callback function as argument
- returns an array that's the reuslt of calling that callback function (return values) on each element of the original array

Array.prototype.filter
- called on an array
- takes a callback function as argument
- returns a new array
- each element is passed to the callback as an argument
- the return value of the callback is evaluated for its truthiness by filter

let greeting = "Hello";

const test = str => {
  str = str.concat(" World!");
  return str;
}

test(greeting);
console.log(greeting);



let greeting = ["Hello"];

const test = arr => {
  arr = arr.concat("World!");
  return arr;
}

test(greeting);
console.log(greeting);



let greeting = ["Hello"];

const test = arr => {
  arr = arr.push("World!");
  return arr;
}

console.log(test(greeting));
console.log(greeting);



let b = 2;

function test(a) {
  a = b;
  return a;
}

test(5);
console.log(b);
console.log(a);

*/
