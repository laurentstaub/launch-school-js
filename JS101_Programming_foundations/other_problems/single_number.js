/* Leetcoode 136 Easy
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Input: array
Output: number

Sort the array
If the 2 first elements are the same remove them and continue
If they are not the same, return the first element
*/

const singleNumber = function(nums) {
  if (nums.length % 2 === 0) return null;
  nums.sort((a, b) => a - b);

  while (true) {
    if (nums[0] === nums[1]) nums.splice(0, 2);
    else return nums[0];
  }
};

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4,1,2,1,2])); // 4
console.log(singleNumber([1])); // 1