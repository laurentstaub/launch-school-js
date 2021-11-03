/*
A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.
*/

function duplicateDigit(integer) {
  return String(integer)
    .split('')
    .reduce((acc, stringDigit) => {
      let digit = Number(stringDigit);
      if (acc[digit]) {
        acc[digit] += 1;
      } else {
        acc[digit] = 1;
      }
      return acc;
    }, [])
    .some(count => count > 1);
}

function setStartOddDivisor(integer) {
  const DIVISOR = 7;

  do {
    integer += 1
  } while (integer % DIVISOR !==0 || integer % 2 === 0);
  return integer;
}

function featured(integer) {
  const MAX_NUMBER = 9876543201;
  let startingPoint = setStartOddDivisor(integer);

  for (let number = startingPoint; number <= MAX_NUMBER; number += 14) {
    if (duplicateDigit(number)) continue;
    return number;
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