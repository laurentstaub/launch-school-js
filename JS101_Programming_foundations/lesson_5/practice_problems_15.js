// Practice 15
// Given the following data structure, write some code to return an array which
// contains only the objects where all the numbers are even.

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

// [{ e: [8], f: [6, 10] }]
// Iterate through all the object properties
// Every seems to be a good candidate
// Filter on top

function testObject(object) {
  return Object.values(object).every(array => {
    return array.every(element => element % 2 === 0);
  });
}

let newArray = arr.filter(object => {
  return testObject(object);
});

console.log(newArray);
