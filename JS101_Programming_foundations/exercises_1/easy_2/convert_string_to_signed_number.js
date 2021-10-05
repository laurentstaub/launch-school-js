function stringToSignedInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    "-": "-",
    "+": "+"
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;

  if (arrayOfDigits[0] === "-") {
    arrayOfDigits.shift();
    arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
    return -value;
  }

  if (arrayOfDigits[0] === "+") {
    arrayOfDigits.shift();
  }

  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true