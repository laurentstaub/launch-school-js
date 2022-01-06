/* leet code 387
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Input: string
Output: index

Approach 1: counter
Iterate over the string
  count each character

Iterate a second time and check if count is 1

*/

const firstUniqChar = function(string) {
  let counter = {};

  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];

    if (!counter[char]) counter[char] = 1;
    else counter[char] += 1;
  }

  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];
    if (counter[char] === 1) return index;
  }

  return -1;
};

console.log(firstUniqChar("leetcode")) // 0
console.log(firstUniqChar("loveleetcode")) // 2
console.log(firstUniqChar("aabb")) // -1