// FUNCTION
//  This function returns true if the number's absolute value is odd.

// RETURNED VALUE
//  true or false

// EXAMPLES
//  console.log(isOdd(2)); // => false
//  console.log(isOdd(5)); // => true
//  console.log(isOdd(-17)); // => true
//  console.log(isOdd(-8)); // => false
//  console.log(isOdd(0)); // => false
//  console.log(isOdd(7)); // => true

function isOdd(number) {
  if (Number.isInteger(number)) {
    return number % 2 !== 0;
  } else {
    return false;
  }
}

// OFFICIAL SOLUTION
function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}

// the remainder operator returns negative results if the number on the left is 
// negative. For that reason, we need to call Math.abs() function and pass the 
// number as the argument, to convert it to a positive value. Then, we can check 
// whether dividing that number by 2 results in a remainder 1 or not.