function myFilter(array, func, values) {
  let result = [];

  array.forEach(function(value) { // [2, 1, 3, 4, 5, 6, 9, 12]
    if (func.call(values, value)) result.push(value);
  });

  return result;
}



let filter = {
  allowedValues: [5, 6, 9],
}

console.log(myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
  return this.allowedValues.indexOf(val) >= 0;
}, filter));