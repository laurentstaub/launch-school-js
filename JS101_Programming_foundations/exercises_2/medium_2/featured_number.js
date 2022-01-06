/*
function featured(number) {
  const uniqueDigits = nb => {
    return String(nb).split('')
      .every((el, _, arr) => arr.indexOf(el) === arr.lastIndexOf(el));
  }
  let testNumber = 7;

  while (testNumber <= 9876543201) {
    if (testNumber > number && uniqueDigits(testNumber)) return testNumber;
    testNumber += 14;
  }

  return "There is no possible number that fulfills those requirements.";
}
*/
function featured(nb) {
  const MAX = 9876543201;
  const oddSeven = nb => (nb % 2 === 1) && (nb % 7 === 0) ? true : false;
  const uniqueDigits = nb => { 
    return String(nb)
      .split('')
      .map((_, index, array) => array.filter(char => char === array[index]))
      .every(string => string.length === 1);
  }

  do {
    nb += 1;
    if (oddSeven(nb) && uniqueDigits(nb)) return nb;  
  } while (nb <= MAX);

  return "There is no possible number that fulfills those requirements.";
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
