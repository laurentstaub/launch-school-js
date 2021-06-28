// It should be a function named findIntegers
// It should only return the integers
// We can use Number.isInteger(value)

// EXAMPLE 

  // let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
  // let integers = findIntegers(things);
  // console.log(integers); // => [1, 3, -4]

function findIntegers(array) {
  let returnedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Number.isInteger(array[i])) {
      returnedArray.push(array[i]);
    }
  }

  return returnedArray;
}