// It should be a function named oddLengths
// It should return a new array
// It should use map and filter
// It should determine the lengths of all elements of the original array (map)
// It should then only keep the ones with an odd length (filter)

// EXAMPLE
// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(array) {
    let returnedArray = array
      .map(element => element.length)
      .filter(element => element % 2 === 1);
    return returnedArray;
}