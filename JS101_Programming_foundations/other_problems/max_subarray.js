/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

Input: Array
Output: Number (sum of the largest subarray)

[-2, 1, -3, 4, -1, 2, 1, -5, 4]

ALGORITHM
declare and initialize a variable with the maxSubarray count
declare and initialize a variable with the currentSubarray count

if current subArray less than current number, it's not worth keeping

*/

function maxSubArray(array) {
  let maxSubarray = - Infinity;
  let currentSubarray = - Infinity;
  
  for (let index = 0; index < array.length; index += 1) {
    currentSubarray = Math.max(array[index], currentSubarray + array[index]);
    maxSubarray = Math.max(currentSubarray, maxSubarray);
  }

  return maxSubarray;
}

console.log(maxSubArray([1])); // 1
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([5,4,-1,7,8])); // 23