/*
const sum = array => array.reduce((acc, nb) => acc += nb);

const sumOfSums = array => {
  let total = 0;
  array.forEach((_, index) => total += sum(array.slice(0, index + 1)));
  return total;
}
*/

const sum = array => array.reduce((acc, nb) => acc += nb);

const sumOfSums = array => {
  return sum(array.map((_, index) => sum(array.slice(0, index + 1))));
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35