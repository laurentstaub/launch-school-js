function multiplyAllPairs(arr1, arr2) {
  let array = [];
  arr1.forEach(n1 => arr2.forEach(n2 => array.push(n1 * n2)));
  return array.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]