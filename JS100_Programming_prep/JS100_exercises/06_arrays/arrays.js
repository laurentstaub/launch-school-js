// FIRST ELEMENT

first(['Earth', 'Moon', 'Mars']); // 'Earth'

function first(array) {
  return array[0];
}


// LAST ELEMENT

last(['Earth', 'Moon', 'Mars']); // 'Mars'

function last(array) {
  return array[array.length - 1];
}


// ADD + DELETE

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
energy.splice(0, 1)    // energy.shift();
energy.push('geothermal');
console.log(energy);


// ALPHABET

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
alphabet.split("");

Array.from(alphabet);


// FILTER

let scores = [96, 47, 113, 89, 100, 102];
scores.filter(x => x >= 100).length;


// VOCABULARY

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for (let i = 0; i < vocabulary.length; i += 1) {
  for (let j = 0; j < vocabulary[i].length; j += 1) {
    console.log(vocabulary[i][j]);
  }
}


// EQUALITY

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);
// expect false


// TYPE

function filter(input) {
  // Is input an array?
  Array.isArray(input);
}


// TRAVEL

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

contains('Barcelona', destinations); // true
contains('Nashville', destinations); // false

function contains(city, array) {
  let returnedBoolean = false;
  array.forEach(function(cityInArray) {
    if (cityInArray === city) returnedBoolean = true;
  })
  return returnedBoolean;
}

function contains(element, list) {
  return list.indexOf(element) >= 0;
}


// PASSCODE

let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// Write some code here.
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

passcode.join("-");


// CHECKING ITEMS OFF THE GROCERY LIST

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

groceryList.forEach((item) => console.log(item));


// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

groceryList; 