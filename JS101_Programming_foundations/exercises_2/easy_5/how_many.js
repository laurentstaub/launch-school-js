function countOccurrences(array) {
  let count = {};

  array.forEach(word => count[word] ? count[word] += 1 : count[word] = 1);
  Object.entries(count).forEach(array => console.log(`${array[0]} => ${array[1]}`));
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2