// Problem 16
// Given the following data structure, write some code that returns an object
// where the key is the first item in each subarray, and the value is the
// second.

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

function objectivize(array) {
  let returnedObject = {};

  arr.forEach(subArray => {
    returnedObject[subArray[0]] = subArray[1];
  });

  return returnedObject;
}

console.log(objectivize(arr));


// Another solution
// Object.fromEntries(arr);