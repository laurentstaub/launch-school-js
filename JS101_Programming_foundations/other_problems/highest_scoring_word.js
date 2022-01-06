
// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to it's position in the alphabet:
// a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the
// original string.

// All letters will be lowercase and all inputs will be valid.

/*
PROBLEM
Input: string (full sentence)
Output: string (word, highest scoring)
Rules: input is lower case
       if 2 words have the same score, return the first
       scoring starts from 1 for &

EXAMPLES (see below)
DATA STRUCURE
Strings and Arrays

ALGORITHM
Create an alphabet string to use as a scoring basis
1. Declare a variable arrayOfWords that will be assigned to the result of the 
transformation of the string to an array of words
2. Iterate through each word
    Track the sum of the letters
    Iterate through each letter of every word and get their value from alphabet
      Value from alphabet will be the index of the letter in the alphabet
  - return the index of the highest scoring word
3. Return the highest scoring word 


*/

function alphabetScore(sentence) {
  const alphabet = "_abcdefghijklmnopqrstuvwxyz";
  let arrayOfWords = sentence.split(' ');

  let arrayOfScores = arrayOfWords.map(word => word
    .split('')
    .reduce((acc, letter) => acc + alphabet.indexOf(letter), 0)
    );

  let indexOfMax = arrayOfScores.indexOf(Math.max(...arrayOfScores));

  return arrayOfWords[indexOfMax];
} 

console.log(alphabetScore('') === '');
console.log(alphabetScore('a z') === 'z');
console.log(alphabetScore('y z') === 'z');
console.log(alphabetScore('aa b') === 'aa');
console.log(alphabetScore('aa') === 'aa');
console.log(alphabetScore('man i need a taxi up to ubud') === 'taxi');
console.log(alphabetScore('what time are we climbing up the volcano') === 'volcano');
console.log(alphabetScore('take me to semynak') === 'semynak');


