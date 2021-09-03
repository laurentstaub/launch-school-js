// Problem 13
// Given the following data structure, sort the array so that the sub-arrays are
// ordered based on the sum of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:
// [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

function calculateOddTotal(array) {
  return array.reduce((acc, value) => {
    if (value % 2 !== 0) {
      return acc + value
    } else {
      return acc;
    }
  }, 0);
}

arr.sort((a, b) => {
  debugger;
  return calculateOddTotal(a) - calculateOddTotal(b);
});

console.log(arr);

// OFFICIAL SOLUTION

arr.sort((a, b) => {
  let oddSumA = a.filter(num => num % 2 === 1)
                 .reduce((sum, next) => sum + next);
  let oddSumB = b.filter(num => num % 2 === 1)
                 .reduce((sum, next) => sum + next);

  return oddSumA - oddSumB;
});