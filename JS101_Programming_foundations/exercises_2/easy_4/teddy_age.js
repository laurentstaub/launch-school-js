/*
PROBLEM
Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).

Input: no input
Output: string

EXAMPLES
Teddy is 69 years old!

DATA STRUCTURE

ALGORITHM
Generate a random number between 20 and 120
Math.random() => 0 to 1 (not included)
We multiply by 100
Math.random() * 100 => 0 to 100 (not included)
We include 100
Math.floor(Math.random() * (100 + 1)) => 0 to 100 (included) 
We go from 20 to 120
Math.floor(Math.random() * (100 + 1)) + 20
*/

console.log(`Teddy is ${Math.floor(Math.random() * (100 + 1)) + 20} years old!`);
