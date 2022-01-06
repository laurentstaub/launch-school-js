/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Input: array of strings
Output: string

Returns the common chars between the array elements, if any

ALGORITHM
if the array length is 0, return an empty string
sort the array from shorter to longer
declare a varaiable `longest common` and initialize it to the first element

iterate from the second element to the end of the array
  if `longest` length is 0, return an empty string
  declare a `tempCommon` to empty
  iterate over each character
    if character is the same as the corresponding one in `longest`, add to 
    `tempCommon`
    else go to the next word

function longestCommonPrefix(array) {
  if (array.length === 0) return "";
  array.sort((a, b) => a.length - b.length);

  if (array[0].length === 0) return "";
  let longestCommon = array[0];

  for (let index = 1; index < array.length; index += 1) {
    let tempCommon = "";
    let iterate = true;
    let jndex = 0;

    while (iterate && jndex < array[index].length) {
      let char = array[index][jndex];

      if (char === longestCommon[jndex]) {
        tempCommon += char;
        jndex += 1;
      } else {
        if (tempCommon.length === 0) return ""
        longestCommon = tempCommon;
        iterate = false;
      }
    }
  }

  return longestCommon;
}
*/

function longestCommonPrefix(array) {
  let arrCopy = array.slice();
  let sortedArr = arrCopy.sort((a, b) => a.length - b.length);
  let shortest = sortedArr.shift();

  while (shortest.length > 0) {
    if (sortedArr.every(item => item.startsWith(shortest))) return shortest;
    shortest = shortest.slice(0, shortest.length - 1);
  }

  return shortest;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // ""
console.log(longestCommonPrefix(["",""])); // ""
console.log(longestCommonPrefix(["flower","flower"])); // "flower
console.log(longestCommonPrefix(["ab","a"]));