const readline = require('readline-sync');

let bill = parseFloat(readline.question(`What is the bill? `));
let tipPercentage = parseFloat(readline.question(`What is the tip percentage? `));

let tip = bill * tipPercentage / 100;
let totalBill = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${totalBill.toFixed(2)}`);