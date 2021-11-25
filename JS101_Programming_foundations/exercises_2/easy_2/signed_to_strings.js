function signedIntegerToString(number) {
  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let digits = [];
  let sign = Math.sign(number);
  number = Math.abs(number);
  
  if (number === 0) return '0';

  while (number > 0) {
    digits.push(number % 10);
    number = Math.floor(number / 10);
  }

  let unsignedString = digits
    .map(element => numbers[element])
    .reverse()
    .join('');

  return sign === +1 ? '+' + unsignedString : '-' + unsignedString;
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");