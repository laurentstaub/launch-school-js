/* Leetcode Easy 169
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Input: array
Output: number

Approach 1: counter / hashtable

const majorityElement = function(nums) {
  let counter = {};

  for (let num of nums) {
    if (!counter[num]) counter[num] = 1;
    else counter[num] += 1;
    if (counter[num] > nums.length / 2) return num;
  }
};
*/

/*
Approach 2: sort
*/

const majorityElement = nums => {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
}


console.log(majorityElement([1]));
console.log(majorityElement([1, 2, 2, 1, 1, 2, 2, 2]));