function myBind(func, obj) {
  return function() {
    return func.apply(obj, arguments);
  }
}

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

divideOneBy(0);