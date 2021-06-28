let rlSync = require('readline-sync');

let age = Number(rlSync.question('How old are you? '));
console.log(`You are ${age} years old.`)
console.log(`In 10 years,  ${age + 10} years old.`);
console.log(`In 20 years,  ${age + 20} years old.`);
console.log(`In 30 years,  ${age + 30} years old.`);
console.log(`In 40 years,  ${age + 40} years old.`);