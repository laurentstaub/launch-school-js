/*
A featured number (unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

Input: number
Output: number

Rules:
  - number is odd
  - multiple is 7
  - each digit appears only once

Algorithm
declare a function `isFeatured`
  number is not odd => return false
  number is not divisible by 7 => return false
  check if digit is unique
    declare a variable `seen` and initiate to an empty array
    iterate over each letter and add it in 

Loop and increment number by 1
check if it is a featured number

*/

function nextOddSeven(nb) {
  while (true) {
    nb += 1;
    if (nb % 2 === 1 && nb % 7 === 0) return nb;
  }
}

function isUnique(nb) {
  let seen = [];
  let chars = String(nb).split('')
    
  for (let index = 0; index < chars.length; index += 1) {
    let char = chars[index];
    if (seen.includes(char)) return false;
    seen.push(char);
  }

  return true;
}


function featured(nb) {
  nb = nextOddSeven(nb);

  while (nb <= 9876543201){
    if (isUnique(nb)) return nb;
    nb += 14;
  }

  return "There is no possible number that fulfills those requirements.";
}


console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
