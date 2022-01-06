/*
In the previous exercise, you developed a function that converts non-negative numbers to strings. In this exercise, you're going to extend that function by adding the ability to represent negative numbers as well.

Write a function that takes an integer and converts it to a string representation.

You may not use any of the standard conversion functions available in JavaScript, such as String() and Number.prototype.toString(). You may, however, use integerToString() from the previous exercise.

You might also want to check the Math.sign() function.
*/

function signedIntegerToString(number) {
  let sign = Math.sign(number);
  let result = '';
  let dict = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];

  number = Math.abs(number);

  do {
    digit = number % 10;
    number = Math.floor(number / 10);
    result = dict[digit] + result;
  } while (number > 0);

  if (sign === -1) return '-' + result;
  else if (sign === +1) return '+' + result;
  return result;
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");