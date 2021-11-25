/*
PROBLEM
Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

Input: String
Output: String
Rules: concert string to its corresponding digit character

EXAMPLES (see below)
DATA STRUCTURE
Array or object

ALGORITHM
We could split the string to work on an array (problem with punctuation)
We could use regex and replace
array[i] => i

Regex
We go through each element of the array
  we create a corresponding regex and replace the string

*/

function wordToDigit(string) {
  let numbers = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
  ];

  numbers.forEach((number, index) => {
    let regex = new RegExp(number, 'g')
    string = string.replace(regex, index);
  });

  return string;
}

let numbers = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
];

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."