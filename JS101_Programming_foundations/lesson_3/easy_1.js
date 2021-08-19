// QUESTION 1
// Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;

// Bonus
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?

/*
It doesn't raise an error. The JavaScript engine will treat array slots 3
through 5 as empty slots.

Bonus Answer:
numbers[4] will output undefined, but the slot is empty -- it doesn't have a
value, not even undefined, in spite of what the line returns. This distinction
is important: if you use map(), for instance, the new array will also have empty
slots in the corresponding positions. On the other hand, slots with a value of
undefined will be remapped based on the return value of the callback
*/


// QUESTION 2
// How can you determine whether a given string ends with an exclamation
// mark (!)?
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

str1.endsWith("!"); // true
str2.endsWith("!"); // false


// QUESTION 3
// Determine whether the following object of people and their age contains an
// entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

ages.hasOwnProperty('Lily');
Object.keys(ages).includes('Spot');


// QUESTION 4
// Using the following string, create a new string that contains all lowercase
// letters except for the first character, which should be capitalized. (See
// the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

munstersDescription[0].toUpperCase() +
  munstersDescription.slice(1).toLowerCase();

munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();


// QUESTION 5
// What will the following code output?

console.log(false == '0');
console.log(false === '0');

// true
// false


// QUESTION 6
// We have most of the Munster family in our ages object:

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// Add entries for Marilyn and Spot to the object:
let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(ages, additionalAges);


// QUESTION 7
// Determine whether the name Dino appears in the strings below -- check each
// string separately):

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

str1.includes('Dino'); // false
str2.includes('Dino'); // true

str1.match('Dino') !== null; // false
str2.match('Dino') !== null; // true

str1.indexOf('Dino') > -1; // false
str2.indexOf('Dino') > -1; // true


// QUESTION 8
// How can we add the family pet, "Dino", to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push('Dino');

flintstones = flintstones.concat("Dino");

flintstones[flintstones.length] = "Dino";


// QUESTION 9
// In the previous problem, our first answer added 'Dino' to the array like
// this:

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");

// How can we add multiple items to our array? ('Dino' and 'Hoppy')

flintstones.push("Dino", "Hoppy");


//QUESTION 10
// Return a new version of this sentence that ends just before the word house.
// Don't worry about spaces or punctuation: remove everything starting from the
// beginning of house to the end of the sentence.

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

advice.slice(0, advice.indexOf("house"));