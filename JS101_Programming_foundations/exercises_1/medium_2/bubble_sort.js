function bubbleSort(array) {
  let swap = null;

  do {
    swap = false;
    array.forEach((_, index) => {
      if (array[index - 1] > array[index]) {
        [array[index - 1], array[index]] = [array[index], array[index - 1]];
        swap = true;
      }
    })
  } while (swap === true);

  return array;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3); 