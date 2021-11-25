/*
function interleave(arr1, arr2) {
  let newArray = [];
  arr1.forEach((_, index) => newArray.push(arr1[index], arr2[index]));

  return newArray;
}
*/
function interleave(arr1, arr2) {
  return arr1.reduce((acc, _, index) => {
    acc.push(arr1[index], arr2[index]);
    return acc;
  }, []);
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]