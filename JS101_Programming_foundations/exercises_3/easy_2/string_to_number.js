/*
The parseInt() method converts a string of numeric characters (including an optional plus or minus sign) to an integer. The method takes 2 arguments where the first argument is the string we want to convert and the second argument should always be 10 for our purposes. parseInt() and the Number() method behave similarly. In this exercise, you will create a function that does the same thing.

Write a function that takes a string of digits and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

Input: string
Output: number

Algorithm

We initialize a `total` variable to 0.
We initialize a `dict` variable that will hold the corresponding values for each string

Starting from the left of the string
On each iteration, we add the number times the mutiplier to the total
multiplier = string.length - (index + 1)
*/

function stringToInteger(string) {
  let total = 0;

  let dict = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  }

  for (let index = string.length - 1; index >= 0; index -= 1) {
    let multiplier = 10 ** (string.length - (index + 1));
    total += dict[string[index]] * multiplier;
  }

  return total;
}

console.log(stringToInteger("1") === 1); // logs true
console.log(stringToInteger("11") === 11); // logs true
console.log(stringToInteger("570") === 570); // logs true
console.log(stringToInteger("4321") === 4321); // logs true


