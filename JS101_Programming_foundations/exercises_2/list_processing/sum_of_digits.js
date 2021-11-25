const sum = number => {
  return String(number)
    .split('')
    .reduce((acc, char) => acc += Number(char), 0);
}


console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45