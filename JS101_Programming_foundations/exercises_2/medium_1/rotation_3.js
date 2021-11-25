function rotateRightmostDigits(number, rigthIndex) {
  let array = String(number).split('');
  let element = array.splice(array.length - rigthIndex, 1);
  return Number(array.concat(element).join(''));
}

function maxRotation(number) {
  for (let index = String(number).length; index >= 2; index -= 1) {
    number = rotateRightmostDigits(number, index);
  }

  return number;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845