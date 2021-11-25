/*
PROBLEM
Merge sort is a recursive sorting algorithm that works by breaking down an array's elements into nested subarrays, then combining those nested subarrays back together in sorted order. It is best explained with an example.

EXAMPLE (see below)
DATA STRUCTURE
ALGORITHM
[5, 3] =>
[[5], [3]]

we split an array into 2 subarrays until each element has a length of 1


we use merge method to sort

[6, 2, 7, 1, 4] =>
[[6, 2, 7], [1, 4]]
[[[6], [2]], [[7], [1]], [4]]

*/

function merge(array1, array2) {
  let arr1 = array1.slice();
  let arr2 = array2.slice();
  let newArray = [];
  
  while (arr1.length > 0 || arr2.length > 0) {
    if (arr1[0] <= arr2[0] || arr2.length === 0) newArray.push(arr1.shift());
    else newArray.push(arr2.shift());
  }

  return newArray;
}

function mergeSort(array) {
  if (array.length === 1) return array;
 
  array = [array.slice(0, array.length / 2), array.slice(array.length / 2)]
    .map(subArray => mergeSort(subArray));
    
  return merge(array[0], array[1]);
}


console.log(mergeSort([5, 3]));
console.log(mergeSort([9, 5, 7, 1]));
console.log(mergeSort([6, 2, 7, 1, 4]));


console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
