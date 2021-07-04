// We should find a way to differentiate 0 ans -0 withouth using Object.is
let value = -0;
Object.is(value, 0)
= false

Object.is(value, -0)
= true

// Properties;
//  0 === -0      true
//  "0".length    1
//  "-0".length   2
//  1 / 0         Infinity
//  1 / -0        -Infinity

// doesn't work String(-0) evaluates as "0"
function isNegativeZero(value) {
  if (value === 0) {
    if (String(value).length === 2) {
      return true;
    }
  }
  return false;
}

// doesn't work String(-0) evaluates as "0"
function isNegativeZero(value) {
  if ( 1 / value === -Infinity) return true;
  return false;
}