/*
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
*/

const stringPermutations = str => { // 'ab'
  if (str.length === 1) return [str];     //      // base case 1
  if (str.length === 2) return [str, str[1] + str[0]];   // base case 2 ['ab', 'ba']

  return str  // "abc"
    .split('')  // ["a", "b", "c"]
    .reduce((acc, letter, i) => // acc ["abc", "acb", "bac", "bca"]   letter = "c"   i = 2
        acc  // ["abc", "acb", "bac", "bca", "cab", "cba"]
          .concat(stringPermutations(str.slice(0, i) + str.slice(i + 1))  // "ab" + undefined // "ab"
          .map(val => letter + val)) // ["cab", "cba"]
    , []);
};

console.log(stringPermutations(''));
console.log(stringPermutations('a'));
console.log(stringPermutations('abc'));
console.log(stringPermutations('*$*'));

/*
first call ('abcd')
Iterate over 'abcd'
  - 'a' call ('bcd')
    Iterate over ('bcd')
    - 'b' call ('cd') => ['cd', 'dc'] => 'bcd', 'bdc'
    - 'c' call ('bd') => ['bd', 'db'] => 'cbd', 'cdb'
    - 'd' call ('bc') => ['bc', 'cb'] => 'dbc', 'dcb'
  - ['abcd', 'abdc', 'acbd', 'acdb', 'adbc', 'adcb']
  - 'b'
*/

/*
const permute = function(nums) {
  let result = [];
  let length = nums.length;

  const backtrack = (first) => {
    if (first === length) result.push(nums);

    for (let index = first; index < length; index += 1) {
      [nums[first], nums[index]] = [nums[index], nums[first]];
      [nums[first], nums[index]] = [nums[index], nums[first]];
    }
  }

  return result;
};

console.log(permute([1, 2, 3]));
// [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/