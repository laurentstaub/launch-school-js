// Log all odd numbers from 1 to 99, inclusive, to the console, with each number 
// on a separate line.

for (let i = 1; i <= 99; i += 2) {
  console.log(i);
}

// OFFICIAL SOLUTION
for (let number = 1; number < 100; number += 2) {
  console.log(number);
}

// Repeat this exercise with a technique different from the one that you used, 
// and different from the one provided. Also consider adding a way for the user 
// to specify the limits of the odd numbers logged to the console.

function printOdd(start, end) {
  let number = start;

  if (number % 2 === 0) {
    number = number + 1;
  }

  do {
    console.log(number);
    number += 2;
  } while (number <= end);
}