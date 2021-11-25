let calculated = { 1: 1, 2: 1 };

function fibonacci(number) {

  if (calculated[number]) return calculated[number];
  else {
    calculated[number] = fibonacci(number - 1) + fibonacci(number - 2);
    return calculated[number];
  }
}

console.log(fibonacci(20));      // 6765
console.log(fibonacci(50));      // 12586269025