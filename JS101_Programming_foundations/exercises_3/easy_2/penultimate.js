/*
Write a function that returns the next to last word in the String passed to it as an argument.

Words are any sequence of non-blank characters.
You may assume that the input String will always contain at least two words.

Input: string
Output: string

Algorithm
Approach 1: turn string to an array and return n - 2 word
*/

function penultimate(string) {
  let array = string.split(' ');
  return array[array.length - 2];
}

console.log(penultimate("last word")); // logs true
console.log(penultimate("Launch School is great!")); // logs true