// LENGTH
"These aren't the droids you're looking for."
"These aren't the droids you're looking for.".length

// ALL CAPS
'confetti floating everywhere'
'confetti floating everywhere'.toUpperCase();

// REPEAT
// It should be a function
// It should return a string
// It should take 2 arguments: numberOfTimes and a text string
// It should repeat the text a numberOfTimes

// Example
// repeat(3, 'ha'); // 'hahaha'

function repeat(numberOfTimes, text) {
  let repeatedString = ""

  for (let i = 0; i < numberOfTimes; i += 1) {
    repeatedString = repeatedString + text;
  }

  return repeatedString;
}

// MULTILINE STRING
// A pirate I was meant to be!
// Trim the sails and roam the sea!

let multiLineString = "A pirate I was meant to be!\nTrim the sails and roam the sea!"

// CASE INSENSITIVE EQUALITY

let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

string1.toLowerCase() === string2.toLowerCase();
string1.toLowerCase() === string3.toLowerCase();

// CONTAINS CHARACTER

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

byteSequence.includes('x');


// BLANK? V1
isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true

function isBlank(string) {
  if (string.length === 0) {
    return true;
  }

  return false;
}

function isBlank(string) {
  return string.length === 0;
}


// BLANK? V2

isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true

function isBlank(string) {
  let cleanedString = string.replace(" ", "");
  return cleanedString.length === 0;
}

function isBlank(string) {
  return string.trim().length === 0;
}


// CAPITALIZE WORDS

let textString = 'launch school tech & talk';
let words = textString.split(' ');
let capitalizedWords = words.map((word) => word[0].toUpperCase()
                        + word.slice(1));
let capitalizedSentence = capitalizedWords.join(" ");

textString
  .split(' ')
  .map((word) => word[0].toUpperCase() + word.slice(1))
  .join(" ");
