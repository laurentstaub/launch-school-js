function getSubarrays(array) {
  let subarrays = [];
  for (let idx = 0; idx < array.length; idx += 1) {
    for (let jdx = idx + 1; jdx <= array.length; jdx += 1) {
      subarrays.push(array.slice(idx, jdx));
    }
  }
  return subarrays;
}

console.log(getSubarrays([1, 2, 3, 4]));
console.log(getSubarrays([1, 2, 3, 4, 5, 6])); 
console.log(getSubarrays([1, 2, 3, 4, 5, 6, 7, 8]));