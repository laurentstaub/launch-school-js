/*
function sequence(number) {
  return new Array(number).fill(0).map((_, index) => index += 1);
}
*/

function sequence(count) {
  return [...Array(count).keys()].map(index => index + 1)
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]