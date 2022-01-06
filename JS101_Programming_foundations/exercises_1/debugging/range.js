function range(start, end) {
  if (end === undefined) return range(0, start);
  let array = [];

  for (let element = start; element <= end; element++) {
    array.push(element);
  }

  return array;
}

console.log(range(10, 20));
console.log(range(5));