/*
Write a function called maxSubarraySum which accepts an array of integers and a number called **n**. The function should calculate the maximum sum of **n** consecutive elements in the array.

Calculate the max sum of k consecutive numbers
Input: array, number
Output: number
Rule: if k > array length return null

ALGORITHM
Approach 1
We declare a variable maxSum and initialize it to 0
We declare a variable tempSum and initialize it to 0

We iterate of k elements and calculate the maxSum
We set tempSum to maxSum

We iterate from number to length of the array
  tempSum = tempSum + array[index] - array[index - k]

*/

function maxSubarraySum(array, k) {
  if (k > array.length) return null;

  let maxSum = 0;

  for (let index = 0; index < k; index += 1) {
    maxSum += array[index];
  }

  let tempSum = maxSum;

  for (let index = k; index < array.length; index += 1) {
    tempSum = tempSum + array[index] - array[index - k];
    if (tempSum > maxSum) maxSum = tempSum;
  }

  return maxSum;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5],2)) // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5],4)) // 17
console.log(maxSubarraySum([4,2,1,6],1)) // 6
console.log(maxSubarraySum([4,2,1,6,2],4)) // 13
console.log(maxSubarraySum([],4)) // null