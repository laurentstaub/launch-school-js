/* Launchschool video 2
Given a non-empty string check if it can be constructed by taking a substring
of it and appending multiple copies of the substring together. You may assume 
the given string consists of lowercase letters only.

Input: string
Output boolean

Approach 1
From char 1 to char index (index max will be string length divided by t2)
  concat the char sequence n times so that it reaches the length of the string
  if it is not possible to reach the length, go to next iteration
  if it possible to reach the length, and characters are the same, return true
return false
*/

function repeatedSubstringPattern(string) {
  for (let index = 1; index <= string.length / 2; index += 1) {
    let sequence = string.slice(0, index);
    let repeater = Math.floor(string.length / sequence.length);

    if (sequence.repeat(repeater) === string) return true;
  }

  return false;
}

console.log(repeatedSubstringPattern("abab") === true);
console.log(repeatedSubstringPattern("aba") === false);
console.log(repeatedSubstringPattern("aabaaba") === false);
console.log(repeatedSubstringPattern("abaababaab") === true);
console.log(repeatedSubstringPattern("abcabcabc") === true);