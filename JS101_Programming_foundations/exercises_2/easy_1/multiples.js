/*
PROBLEM
sum of numbers between 1 and number that are miltiples of 3 or 5.
*/

function multisum(number) {
  let array = [];

  for (let index = 0; index <= number; index += 1) {
    if (index % 3 === 0 || index % 5 === 0) array.push(index);
  }

  return array.reduce((total, multiple) => total + multiple);
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168