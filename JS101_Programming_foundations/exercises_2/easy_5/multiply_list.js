function multiplyList(arr1, arr2) {
  return arr1.reduce((acc, _, index) => {
    acc.push(arr1[index] * arr2[index]);
    return acc;
  }, []);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]