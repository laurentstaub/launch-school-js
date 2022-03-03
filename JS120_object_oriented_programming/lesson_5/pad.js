// Execution context
function printThis() {
  console.log(this);
}

const obj = {
  printThis: printThis,
}

printThis();
obj.printThis();

// Both lines 10 and 11 are demonstrating
// implicit execution context