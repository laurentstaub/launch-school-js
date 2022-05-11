/*
function foo(array, callback) {
  for (let index = 0; index < array.length; index += 1) {
    callback(array[index]);
  }
}

foo([1, 2, 3], value => console.log(value));


function filter(numberArray, func) {
  let result = [];
  for (let index = 0; index < numberArray.length; index += 1) {
    if (func(numberArray[index])) result.push(numberArray[index]);
  }

  return result;
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string")); // => [ 'abc', 'xyz' ]


function map(array, callback) {
  let result = [];
  for (let index = 0; index < array.length; index += 1) {
    result.push(callback(array[index]));
  }

  return result;
}

let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]


function reduce(array, callback, acc) {
  let index = 0;
  
  if (acc === undefined) {
    acc = array[0];
    index = 1;
  }

  for (index; index < array.length; index += 1) {
    acc = callback(acc, array[index])
  }

  return acc;
}
*/

function filter(array, callback) {
  return array.reduce((items, item) => {
    if (callback(item)) items.push(item);
    return items;
  }, []);
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string")); // => [ 'abc', 'xyz' ]