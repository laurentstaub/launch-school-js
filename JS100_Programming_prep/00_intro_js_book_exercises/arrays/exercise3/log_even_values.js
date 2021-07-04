let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

// It should look into each nested array
// It should find the even numbers
// It should log the even numbers (array value) to the console

for (let i = 0; i < myArray.length; i++) {
  let arrayI = myArray[i];
  for (let j = 0; j < arrayI.length; j++) {
    let valueJ = arrayI[j];
    if (valueJ % 2 === 0) {
      console.log(valueJ);
    }
  }
}

