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
  if (string.length === 1) return false;
  return string === string.split('').reverse().join('');
}

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]