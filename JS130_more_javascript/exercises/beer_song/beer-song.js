"use strict";

/* PEDAC

Problem

input: number
output: string of lyrics based on the input number

Rules
- 
verses(nbOne = 99, nbTwo = 0)
verses(nbOne, nbTwo)
verse(nbOne)          // nbTwo = 0
lyrics()              // nbOne = 99, nbTwo = 0

Iterate from `nbOne` down to `nbTwo`

stringTemplate = `${number} bottles of beer on the wall, ${number} bottles of beer.\n`
                 + `Take one down and pass it around, ${number - 1} bottles of beer `
                 + `on the wall.\n`;

Specific cases:
  * 1 bottle left (number = 1)
    "1 bottle of beer on the wall, 1 bottle of beer.\n" +
    "Take ${number !==1" ? "one" : "it"} down and pass it around, ${number !==1" ? number - 1 : "no more"} bottles " +
    "of beer on the wall.\n"
  * No bottles left (number = 0)
    "No more bottles of beer on the wall, no more " +
    "bottles of beer.\nGo to the store and buy some " +
    "more, 99 bottles of beer on the wall.\n"
  * When several verses, we have to add `\n` in front of the new verse

*/

class BeerSong {
  static verses(nbOne = 99, nbTwo = nbOne) {
    const finalVerse = 'No more bottles of beer on the wall, no more ' +
      'bottles of beer.\nGo to the store and buy some ' +
      'more, 99 bottles of beer on the wall.\n';

    let result = '';
    let counterVerse = 1;

    for (let index = nbOne ; index >= nbTwo; index -= 1) {
      if (counterVerse > 1) result += '\n';
      if (index !== 0) {
        result += `${index} bottle${index === 1 ? '' : 's'} of beer on the wall, ${index} ` +
          `bottle${index === 1 ? '' : 's'} of beer.\n` +
          `Take ${index === 1 ? 'it' : 'one'} down and pass it around, ` +
          `${index === 1 ? 'no more' : index - 1} bottle${index === 2 ? '' : 's'} of beer ` +
          `on the wall.\n`;;
        counterVerse += 1;
      } else {
        result += finalVerse;
      }
    }

    return result;
  }

  static verse(nbOne) {
    return BeerSong.verses(nbOne);
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }
}

module.exports = BeerSong;