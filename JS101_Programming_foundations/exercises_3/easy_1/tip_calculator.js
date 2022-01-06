/*
Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

*/

const readline = require('readline-sync');
let note = Number(readline.question("A combien s'élève la note?\n"));
let pourcentage = Number(readline.question("Quel est le pourcentage de pourboire?\n"));
let pourboire = note * pourcentage / 100;

console.log(`Le pourboire est de ${pourboire}`); 
console.log(`Le total est de ${note + pourboire}`);