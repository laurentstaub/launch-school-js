/*
Write a program that will ask for user's name. The program will then greet the 
user. If the user writes "name!" then the computer yells back to the user.

PROBLEM
=======
Input:
  * A string (with potentially a '!' at the end)

Output:
  * A string (uppercase if given a '!' as last character)

Rules:
  * if the last character of the string is a '!', we return the greeting text
    in uppercase

EXAMPLES
========
What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?

DATA STRUCTURE
==============
Input: string
Output: string

ALGORITHM
=========
Prompt user for name
Look for the last character in the string
if the string is a '!'
  return a greeting string in uppercase
If not, we return a greeting string in lowercase

CODE
====
*/
const readline = require('readline-sync');

console.log('What is your name?');
let name = readline.prompt();

if (name[name.length - 1] === '!') {
  name = name.slice(0, name.length - 1).toUpperCase();
  console.log(`HELLO ${name}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}`);
}

/*
OFFICIAL SOLUTION
let readlineSync = require("readline-sync");

let name = readlineSync.question("What is your name?\n");

if (name[name.length - 1] === "!") {
  name = name.slice(0, -1);
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE YOU SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}

*/