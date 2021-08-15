/*
PROBLEM
-------
Sequence Count
Create a function that takes two integers as arguments. The first argument is a
count, and the second is the starting number of a sequence that your function
will create. The function should return an array containing the same number of
elements as the count argument. The value of each element should be a multiple
of the starting number.

You may assume that the count argument will always be an integer greater than
or equal to 0. The starting number can be any integer. If the count is 0, the
function should return an empty array.

Input: 2 numbers count and multiple
Output: an array of count length

EXAMPLES
--------
sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []

DATA STRUCTURE
--------------

ALGORITHM
---------
we define a function named sequence that takes count and multiple as arguments
we create an empty array
we create a count at zero
we create a for loop from 0 to count
  we add multiple to count
  we push the multiple to the array
we return the array
*/

function sequence(count, multiple) {
  let array = [];
  let counter = 0;

  for (let index = 0; index < count; index += 1) {
    counter += multiple;
    array.push(counter);
  }

  return array;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []