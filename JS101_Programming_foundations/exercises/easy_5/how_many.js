/*
PROBLEM
-------
How Many?
Write a function that counts the number of occurrences of each element in a
given array. Once counted, log each element alongside the number of occurrences.
Consider the words case sensitive e.g. ("suv" !== "SUV").

Input: array
Output: log each element

EXAMPLES
--------
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2

DATA STRUCTURE
--------------
Intermediate: object

ALGORITHM
---------
we create an empty object
we iterate over the array and for each element
  if the key in the object doesn't exist
    we create it and assign a value of 0 to it
  then we add one to the value of the corresponding key
for each key/value pair
  we console log the key with its value

CODE
----
*/

function countOccurrences(array) {
  const occurrences = {};
  
  for (let index = 0; index < array.length; index += 1) {
    const string = array[index].toLowerCase();
    occurrences[string] = occurrences[string] || 0;
    occurrences[string] += 1;
  };

  for (let key in occurrences) {
    console.log(`${key} => ${occurrences[key]}`);
  }
}

countOccurrences(['car', 'car', 'truck', 'car', 'SUV', 'truck',
'motorcycle', 'motorcycle', 'car', 'truck', 'suv']);