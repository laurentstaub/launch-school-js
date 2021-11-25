/*
const stringToInteger = string => {
  let numbers = {
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
  }

  let total = 0;
  
  string
    .split('')
    .reverse()
    .forEach((element, index) => total += numbers[element] * 10 ** index);

  return total;
}
*/

const stringToInteger = string => {
  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let total = 0;
  
  string
    .split('')
    .reverse()
    .forEach((element, index) => total += numbers.indexOf(element) * 10 ** index);

  return total;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

const hexadecimalToInteger = string => {
  let numbers = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let total = 0;
  
  string
    .split('')
    .reverse()
    .forEach((element, index) => total += numbers.indexOf(element.toUpperCase()) * 16 ** index);

  return total;
}

console.log(hexadecimalToInteger('4D9f') === 19871);
console.log(hexadecimalToInteger('4D9f'));