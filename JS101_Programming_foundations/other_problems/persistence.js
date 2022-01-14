/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

Input: number
Output: number (number of times)

Rule:
 - count the times we multiply digits of a number until we reach a single digit number
 - remark: can we always get to a single digit number ?

Algorithm
declare a function that multiplies all the elements of an array
initialize a counter variable to 0;

while loop until the number length is 1
  convert it to a string, split it to an array, convert elements to a number
  multiply all the numbers from the array and reassign number to its result
  increment the counter by 1

return counter

// Test cases
(persistence(39),3);
    (persistence(4),0);
    (persistence(25),2);
    (persistence(999),4);
*/

function persistence(number) {  // number = 25
  const multiplyElements = array => {
    return array.reduce((acc, nb) => acc * nb, 1);
  }  // return 10
  let counter = 0;  // counter = 0

  while (String(number).length > 1) {  // condition is 2
    let digitsArray = String(number).split('').map(el => Number(el));  // [ 2, 5]
    number = multiplyElements(digitsArray); // 10
    counter += 1  // 1
  }
  
  return counter;
}

// console.log(persistence()) // ???
console.log(persistence(4)) // 0
console.log(persistence(25)) // 2
console.log(persistence(39)) // 3
console.log(persistence(999)) // 4

// console.log(persistence())