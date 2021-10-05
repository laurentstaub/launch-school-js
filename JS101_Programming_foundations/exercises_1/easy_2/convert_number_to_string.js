/*
Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

PROBLEM
Input: number
Output: string

EXAMPLES
integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"

DATA STRUCTURE
number
string
array ?

ALGORITHM


CODE
*/

function signedIntegerToString(number) {
  let numberArray = [];
  let sign = Math.sign(number);
  number = Math.abs(number);

  while (number) {
    numberArray.unshift(number % 10);
    number = Math.floor(number / 10);
  }

  let stringDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let stringToReturn = numberArray
    .map((element) => stringDigits[element])
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, "")

  if (sign === -1) {
    return stringToReturn = "-" + stringToReturn;
  } else if (sign === 1) {
    return stringToReturn = "+" + stringToReturn;
  } else if (sign === 0) {
    return "0";
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

/*
OFFICIAL SOLUTION

function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case -1:
      return `-${integerToString(-number)}`;
    case +1:
      return `+${integerToString(number)}`;
    default:
      return integerToString(number);
  }
}
*/