/*
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
*/

const permute = function(nums) {
  let result = [];
  let length = nums.length;

  const backtrack = (first) => {
    if (first === length) result.push(nums);

    for (let index = first; index < length; index += 1) {
      [nums[first], nums[index]] = [nums[index], nums[first]];
      backtrack(first + 1);
      [nums[first], nums[index]] = [nums[index], nums[first]];
    }
  }

  backtrack(0)
  return result;
};

console.log(permute([1, 2, 3]));
// [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]