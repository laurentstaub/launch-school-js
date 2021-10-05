/*
PROBLEM
In the previous exercise, we developed a recursive solution for computing the nth Fibonacci number. In a language that is not optimized for recursion, some (but not all) recursive functions can be extremely slow and may require massive quantities of memory and/or stack space. If you tested for bigger nth numbers, you might have noticed that getting the 50th fibonacci number already takes a significant amount of time.

Fortunately, every recursive function can be rewritten as a non-recursive (or procedural) function.

Rewrite your recursive fibonacci function so that it computes its results without using recursion.

EXAMPLES
fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050

*/

function fibonacci(number) {
  let totaln2 = 1
  let totaln1 = 1;
  let total = 1;

  if (number === 1 || number === 2) return total;
  
  for (nb = 3; nb <= number; nb += 1) {
    total = totaln1 + totaln2;
    totaln2 = totaln1;
    totaln1 = total;
  }

  return total;
}

console.log(fibonacci(5));
console.log(fibonacci(20));
console.log(fibonacci(50));
console.log(fibonacci(75));