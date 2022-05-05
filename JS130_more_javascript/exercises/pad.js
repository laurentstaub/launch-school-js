function foo(array, callback) {
  for (let index = 0; index < array.length; index += 1) {
    callback(array[index]);
  }
}

foo([1, 2, 3], value => console.log(value));