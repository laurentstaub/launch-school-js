/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

const twoSum = function(nums, target) {
  let sortedNums = nums.slice().sort((a, b) => a - b);
  let index1 = 0;
  let index2 = nums.length - 1;
    
  while (index1 < index2) {
    let sum = sortedNums[index1] + sortedNums[index2];
    if (sum === target) {
      let i1 = nums.indexOf(sortedNums[index1]);
      let numsLeft = nums.slice(i1 + 1);
      let i2 = numsLeft.indexOf(sortedNums[index2]) + (i1 + 1);

      return [i1, i2];
    }
    if (sum < target) index1 += 1;
    if (sum > target) index2 -= 1;
  }
}
*/


const twoSum = function (nums, target) {
  let count = {};

  for (let i = 0; i < nums.length; i += 1) {
    if (count[nums[i]] === undefined) count[target - nums[i]] = i;
    else return [count[nums[i]], i];
  }
}


console.log(twoSum([3, 3], 6)); // [0, 1]
console.log(twoSum([1, 2, 3, 4], 6)); // [1, 3]
console.log(twoSum([1, 2, 3], 5)); // [1, 2]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([1, 5, 3, 2, 4], 6)); // [0, 1]