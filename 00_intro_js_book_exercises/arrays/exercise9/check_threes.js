// It should not use for, while or do/while loop
// It should take an array as parameter
// It should check whether the number 3 appears in the aray
// It should return true or false

// EXAMPLES

// let numbers1 = [1, 3, 5, 7, 9, 11];    // Returns true
// let numbers2 = [];                     // Returns false
// let numbers3 = [2, 4, 6, 8];           // Returns false

function aThreeInTheArray(array) {
  let arrayOfThree = array.filter((number) => number === 3);
  if (arrayOfThree.length !== 0) return true;
  return false;
}

numbers1.includes(3);