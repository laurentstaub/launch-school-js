function leadingSubstrings(string) {
  return string
    .split('')
    .map((_, index) => string.slice(0, index + 1));
}

function substrings(string) {
  let result =[];
  for (let index = 0; index < string.length; index += 1) {
    let substring = string.slice(index);
    result = result.concat(leadingSubstrings(substring));
  }
  return result;
}

function isPalindrome(string) {
  return string === string.split('').reverse().join('')
}

function palindromes(string) {
  substrings(string).filter(string => isPalindrome(string));
}

console.log(substrings('abcde'));