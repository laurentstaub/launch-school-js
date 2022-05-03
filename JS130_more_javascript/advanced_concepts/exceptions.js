/*
function div(first, second) {
  if (second === 0) {
    throw new Error("Divide by zero!");
  }

  return first / second;
}

let result = div(1, 0);
console.log(result);
*/

class DivideByZeroError extends Error {}

function div(first, second) {
  if (second === 0) {
    throw new DivideByZeroError("Divide by zero!");
  }

  return first / second;
}

function divideOneBy(divisor) {
  try {
    let result = div(1, divisor);
    console.log(result);
  } catch (error) {
    if (error instanceof DivideByZeroError) {
      console.log(`${error.message} ignored`);
    } else {
      throw error;
    }
  }
}

divideOneBy(1);
divideOneBy(0);