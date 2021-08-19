/*
PROBLEM
-------
Reversed Arrays
Write a function that takes an Array as an argument and reverses its elements
in place. That is, mutate the Array passed into this method. The return value
should be the same Array object.

You may not use Array.prototype.reverse().

EXAMPLES
--------
let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true

DATA STRUCTURE
--------------
Arrays

ALGORITHM
---------
we create a new empty array
for each element, starting from the end, we copy the element to the new array
we return the new array

*/

function reverse(array) {
  let reversedArray = [];

  for (let index = array.length - 1; index >= 0; index -= 1) {
    reversedArray.push(array[index]);
  }

  for (let index = 0; array < array.length; index += 1) {
    array[index] = reversedArray[index];
  }
  
  return array;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true
