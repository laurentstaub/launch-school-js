/*
Write a function that returns an Array that contains every other element of 
an Array that is passed in as an argument. The values in the returned list 
should be those values that are in the 1st, 3rd, 5th, and so on elements of 
the argument Array.

PROBLEM
=======
Input: Array
Output: Array

It should return the elements at index 0, 2, 4, 6,...

EXAMPLES
========
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

DATA STRUCTURES
===============
Arrays

ALGORITHM
=========
We create a new array to store the elements to return
We iterate through the array
  If the index of the element is even
    We push the element to the array to be returned
We return the array ti be returned

CODE
====

*/

function oddities(array) {
  let arrayToReturn = [];
  for (let index = 0; index < array.length; index += 2) {
    arrayToReturn.push(array[index]);
  }
  return arrayToReturn;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

function evenities(array) {
  return array.filter(function(element, index) {
    if (index % 2 !== 0) {
      return element;
    }
  })
}

console.log(evenities([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evenities([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(evenities(["abc", "def"])); // logs ['def']
console.log(evenities([123])); // logs []
console.log(evenities([])); // logs []