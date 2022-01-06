/*
Have the method letter_changes(str) take the str parameter being passed and
modify it using the following algorithm. Replace every letter in the string
with the 3rd letter following it in the alphabet (ie. c becomes f, Z becomes C).
Then return this modified string.
*/
function letterChanges(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyzabcABCDEFGHIJKLMNOPQRSTUVWXYZABC";

  return string
    .split('')
    .map((char) => {
      let index = alphabet.indexOf(char);
      if (char.toLowerCase() === char.toUpperCase()) return char;
      return alphabet[index + 3];
    })
    .join('');
}

console.log(letterChanges('xyz') === ('abc'))
console.log(letterChanges("this long cake@&") === "wklv orqj fdnh@&")
console.log(letterChanges("Road trip9") === "Urdg wuls9")
console.log(letterChanges("EMAILZ@gmail.com") === "HPDLOC@jpdlo.frp")