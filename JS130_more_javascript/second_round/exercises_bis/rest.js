function sum() {
  // values = [...arguments] // Array.prototype.slice.call(arguments);

  return [...arguments].reduce(function(a, b) {
    return a + b;
  });
}

console.log(sum(1, 4, 5, 6)); // 16