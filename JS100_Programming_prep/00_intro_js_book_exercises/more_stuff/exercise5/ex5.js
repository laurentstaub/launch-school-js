// What does the following function do?

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// It splits the string on the space and stores the pieces in an array
// The order of the array values is reversed
// It then returns an array of the values length