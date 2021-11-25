function stringToSignedInteger(str) {
  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let sign = null;
  let total = 0;

  if (str[0] === '-' || str[0] === '+' ) {
    sign = str[0];
    str = str.slice(1);
  }

  str
   .split('')
   .reverse()
   .forEach((element, index) => total += numbers.indexOf(element) * 10 ** index);

  return sign === '-' ? - total : total;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true