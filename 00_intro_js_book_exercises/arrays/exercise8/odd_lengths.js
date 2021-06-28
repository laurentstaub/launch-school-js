// It should be a function named oddLengths
// It should use reduce
// It should return an array with only the odd elements
// Accumulator should be an array
// If the current value.length is odd, we add it to the accumulator

// EXAMPLE
// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(array) {
  return array.reduce(function(newArray, string) {
    if (string.length % 2 === 1) {
      newArray.push(string.length);
    }
    return newArray;
  }, []);
}