function cipher(string) {
  string = string.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let revAlphabet = "zyxwvutsrqponmlkjihgfedcba";
  let numbers = "0123456789";
  let result = [];

  for (let index = 0; index < string.length; index += 1) {
    if (numbers.includes(string[index])) result.push(string[index]);
    else if (alphabet.indexOf(string[index]) === -1) continue;
    else result.push(revAlphabet[alphabet.indexOf(string[index])]);
  }

  let spacedResult = [];

  for (let index = 0; index < result.length; index += 1) {
    spacedResult.push(result[index]);
    if ((index + 1) % 5 === 0) spacedResult.push(" ");
  }

  return spacedResult.join("").trim();
}

module.exports = cipher;