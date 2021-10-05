// Log all even numbers from 1 to 99, inclusive, to the console, 
// with each number on a separate line.

for (let number = 1; number <= 99; number += 1) {
  if (number % 2 === 0) {
    console.log(number);
  }
}

// OFFICIAL SOLUTION

for (let number = 1; number < 100; number += 1) {
  if (number % 2 === 1) {
    continue;
  }

  console.log(number);
}