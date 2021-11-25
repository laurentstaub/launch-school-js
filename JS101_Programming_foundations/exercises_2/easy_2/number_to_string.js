function integerToString(number) {
  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let digits = [];
  
  if (number === 0) return '0';

  while (number > 0) {
    digits.push(number % 10);
    number = Math.floor(number / 10);
  }

  return digits
    .map(element => numbers[element])
    .reverse()
    .join('');
}

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"