// It should be a function
// It should return true or false
// It should check whether the passed argument is NaN

// Properties of NaN:
// It is not equal to i (only primitive that has this property ?)
// It has a type of number

function isNotANumber(item) {
  if (typeof(item) === "number") {
    if (item !== item) {
      return true;
    }
  }

  return false
}