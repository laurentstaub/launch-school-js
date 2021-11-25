function letterCaseCount(string) {
  let count = { lowercase: 0, uppercase: 0, neither: 0 };
  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];
    if (char.toUpperCase() === char.toLowerCase()) { 
      count.neither += 1;
    } else if (char === char.toLowerCase()) {
      count.lowercase += 1;
    } else if (char === char.toUpperCase()) {
      count.uppercase += 1;
    }
  }

  return count;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }