/*
Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

1 + 2 + 3 + 4 = 10
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36

1 * 2 * 3 * 4 = 24

*/

const readline = require('readline-sync');

let nombre = Number(readline.question('Quel est votre nombre?\n'));
let operation = readline.question('Somme (s) ou Produit (p)?\n');

if (operation === 's') {
  let total = 0;

  for (let index = 1; index <= nombre; index += 1) {
    total += index;
  }

  console.log(`La somme des entiers de 1 à ${nombre} est ${total}`);
}

else if (operation === 'p') {
  let total = 1;

  for (let index = 1; index <= nombre; index += 1) {
    total *= index;
  }

  console.log(`Le produit des entiers de 1 à ${nombre} est ${total}`);
}