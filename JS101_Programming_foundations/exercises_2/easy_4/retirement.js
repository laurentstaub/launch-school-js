// Date() returns a string
// new Date() returns an object

const readline = require('readline-sync');

const CURRENT_YEAR = Date().getFullYear();
const age = Number(readline.question('What is your age? '));
const retirement = Number(readline.question('At what age would you like to retire? '));
const timeToRetire = retirement - age;
const retirementYear = CURRENT_YEAR + timeToRetire;

console.log(`It's ${CURRENT_YEAR}. You will retire in ${retirementYear}
You have only ${timeToRetire} years of work to go!`);