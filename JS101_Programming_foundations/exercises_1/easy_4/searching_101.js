/*
Write a program that solicits six numbers from the user and logs a message 
that describes whether the sixth number appears among the first five numbers.

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.

*/

const readline = require('readline-sync');

let numbers = [];

numbers.push(Number(readline.question("Enter the 1st number: ")));
numbers.push(Number(readline.question("Enter the 2nd number: ")));
numbers.push(Number(readline.question("Enter the 3rd number: ")));
numbers.push(Number(readline.question("Enter the 4th number: ")));
numbers.push(Number(readline.question("Enter the 5th number: ")));

let numberToSearch = Number(readline.question("Enter the last number: "));

/*
if (numbersArray.includes(numberToSearch)) {
  console.log(`The number ${numberToSearch} appears in ${numbersArray.join(",")}.`);
} else {
  console.log(`The number ${numberToSearch} does not appears in ${numbersArray.join(",")}.`);
};
*/

if (numbers.some((element) => element > numberToSearch)) {
  console.log(`The number ${numberToSearch} < ${numbers.join(",")}.`);
} else {
  console.log(`The number ${numberToSearch} does < ${numbers.join(",")}.`);
};
