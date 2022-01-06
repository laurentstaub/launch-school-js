const readline = require('readline-sync');

let age = Number(readline.question('What is your age? '));
let retirement = Number(readline.question('At what age would you like to retire? '));

let time = new Date();
let currentYear = time.getFullYear();
let yearsToRetirement = retirement - age;
let retirementYear = currentYear + yearsToRetirement;

console.log(`
It's ${currentYear}. You will retire in ${retirementYear}.
You have only ${yearsToRetirement} years of work to go!
`);