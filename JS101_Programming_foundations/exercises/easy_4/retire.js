/*
Build a program that logs when the user will retire and how many more years 
the user has to work until retirement.

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!

*/

const readline = require('readline-sync');

const age = Number(readline.question('What is your age? '));
const retirementAge = Number(
  readline.question('At what age would you like to retire? ')
);
const workTime = retirementAge - age;
const currentYear = new Date().getFullYear();

console.log(`
It's ${currentYear}. You will retire in ${currentYear + workTime}.
You have only ${workTime} years of work to go!
`);