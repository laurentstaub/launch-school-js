// Problem 10
// Perform the same transformation of sorting the subarrays we did in the
// previous exercise with one difference; sort the elements in descending order.

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let returnedArray = arr.map(array => {
  if (typeof array[0] === "number") {
    return array.slice().sort((a, b) => Number(b) - Number(a));
  } else {
    return array.slice().sort((a, b) => {
      if (b < a) {
        return -1;
      } else if (a < b) {
        return 1;
      } else {
        return 0;
      }
    });
  }
});

console.log(returnedArray);



