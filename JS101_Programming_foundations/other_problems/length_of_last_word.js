/*
Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Input: string
Output: number

const lengthOfLastWord = function(string) {
  let array = string.split(' ').filter(string => string !== '');

  return array[array.length - 1].length;
};

const lengthOfLastWord = function(string) {
  string = string.trim();
  let counter = 0;

  for (let index = string.length - 1; index >= 0; index -= 1) {
    if (string[index] === " ") break;
    else counter += 1;
  }

  return counter;
};
*/

const lengthOfLastWord = function(string) {
  let index = string.length;
  let counter = 0;

  while (index > 0) {
    index -= 1;
    if (string[index] !== ' ') counter += 1;
    else if (counter > 0) break;
  }

  return counter;
};

console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6