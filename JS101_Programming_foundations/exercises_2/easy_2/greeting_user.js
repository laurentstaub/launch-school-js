const readline = require('readline-sync');

let answer = readline.question('What is your name? ');

if (answer.endsWith('!')) {
  answer = answer.slice(0, - 1);
  console.log(`HELLO ${answer.toUpperCase()}. WHY ARE WE SCREAMING?`); 
} else {
  console.log(`Hello ${answer}`);
}