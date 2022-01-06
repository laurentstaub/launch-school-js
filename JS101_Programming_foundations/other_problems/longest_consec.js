/*
You are given an array of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

PROBLEM
Get the longest string of consecutive k strings
Input: array of strings
Output: string
Rules: if k < 1, return ""
       only consecutive strings

EXAMPLES

DATA STRUCTURES

ALGORITHM
Approach 1
  Block 1: Get the length of each string through a nbArray (OK)
  Block 2: Find the longest consecutive strings
    Declare a variable longestValue and initialize to 0
    Declare a variable longest index and initialize to null
    Iterate over the nbArray and find the longest values
      [4, 7, 5] How to access the right sized element? Slice
      nbArray on k elements and sum it
  Block 3: return the string from the original array

*/

function longestConsec(array, k) {
  let longestValue = 0;
  let longestIndex = null;
  let nbArray = array.map(string => string.length);

  if (k < 1 || k > array.length) return "";

  nbArray.forEach((_, index) => {
    let sum = nbArray
      .slice(index, index + k)
      .reduce((acc, value) => acc + value, 0)

      if (sum > longestValue) {
        longestValue = sum;
        longestIndex = index;
      }
  });

  return array.slice(longestIndex, longestIndex + k).join('');
}

// Test Cases
console.log(longestConsec(["it", "wkppv"], 0) === "");
console.log(longestConsec(["zone", "abigail"], -2) === "");
console.log(longestConsec(["zone", "abigail", "theta"], 2) === "abigailtheta");
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta");
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh");
console.log(longestConsec([], 3) === "");
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck");
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu");
console.log(longestConsec(["zone", "abigail"], -2) === "");
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz");
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === "");
 