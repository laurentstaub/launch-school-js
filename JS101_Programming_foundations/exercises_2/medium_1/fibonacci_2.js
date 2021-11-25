function fibonacci(number) {
  let result = 0;
  let number1 = 1
  let number2 = 1

  for (let index = 3; index <= number; index += 1) {
    result = number1 + number2;
    number2 = number1;
    number1 = result;
  }

  return result;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050