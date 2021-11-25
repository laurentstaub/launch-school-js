/*
PROBLEM
Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.

Input: user input
Output: string (does the last string appear in the other)

EXAMPLES
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

DATA STRUCTURE
Array to store the 5 first numbers

ALGORITHM
We ask for the first 5 numbers and store them in an array
We check if the number is included
*/

const readline = require('readline-sync');

let answers = [];
answers.push(readline.question('Enter the 1st number: '));
answers.push(readline.question('Enter the 2nd number: '));
answers.push(readline.question('Enter the 3rd number: '));
answers.push(readline.question('Enter the 4th number: '));
answers.push(readline.question('Enter the 5th number: '));
let lastNumber = readline.question('Enter the last number: ');

if (answers.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${answers[0]}, ${answers[1]}, ${answers[2]}, ${answers[3]}, ${answers[4]}.`);
} else {
  console.log(`The number ${lastNumber} does not appear in ${answers[0]}, ${answers[1]}, ${answers[2]}, ${answers[3]}, ${answers[4]}.`);
}