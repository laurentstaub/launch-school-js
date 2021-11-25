/*
PROBLEM
Write a function that takes two sorted arrays as arguments and returns a new array that contains all the elements from both input arrays in sorted order.

You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

Your solution should not mutate the input arrays.

Input: 2 arrays
Output: new array

EXAMPLES(see below)
DATA STRUCTURE: arrays

ALGORITHM
I - Thoughts
the arrays are sorted, so if array[0] of one array is less than the other 
array[0], we push and shift that element.

As we push and shift, we mutate the array so a while loop will get us in trouble
A while loop, might be working. The while loop would have to stop when both
arrays are empty

while both arrays are not empty
  we compare the first elements of each array
    if element1 is less than element2
      we push element1 to the newArray
      we remove element1 from array1
}
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

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]