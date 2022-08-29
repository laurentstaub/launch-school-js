"use strict";

// function hollow(number) {
//   const line = (nb, idx) => {
//     if (idx === 1) return ' '.repeat((nb - idx) / 2) + '*';
//     else return ' '.repeat((nb - idx) / 2) + '*' + ' '.repeat(idx - 2) + '*';
//   };

//   let triangle = [];

//   for (let index = 1; index <= number; index += 2) {
//     triangle.push(line(number, index));
//   }

//   console.log([...triangle, ...triangle.reverse().slice(1)].join('\n'));
// }

  // test('letter b', () => {
  //   let answer = Diamond.makeDiamond('B');
  //   expect(answer).toBe(' A \nB B\n A \n');
  // });

//  A
// B B
//  A

//   A
//  B B
// C   C
//  B B
//   A
//          spaces   index  dtm   nb.   nb - dtm
//    A      0        0.     3.    3.      0
//   B B     1.       1.     2.    3.      1
//  C   C    3.       2.     1.    3.      2
// D     D   5.       3.     0.    3.      3
//  C   C.   3.       4.     1.    3.      2
//   B B     1.       5.     2.    3.      1
//    A

// iterations - 2 - 2 dtm
/*
class Diamond {
  static makeDiamond(letter) {
    const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const line = (nb, dtm) => {
      let letter = ALPHABET[nb - dtm];
      if (dtm === nb) return ' '.repeat(dtm) + letter + ' '.repeat(dtm) + "\n";
      else return ' '.repeat(dtm) + letter + ' '.repeat(iterations - 2 - 2*dtm) 
                  + letter + ' '.repeat(dtm) + "\n";
    };

    let letterIndex = ALPHABET.indexOf(letter);
    let iterations = letterIndex * 2 + 1;
    let result = "";

    for (let index = 0; index < iterations; index += 1) {
      let distToMid = Math.abs(index - letterIndex);
      result += line(letterIndex, distToMid);
    }

    return result;
  }
}

module.exports = Diamond;
*/

class Diamond {
  static alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static makeDiamond(letter) {
    let range = this.letterRange(letter);
    let widthOfDiamond = this.maxWidth(letter);

    let diamond = [];
    range.forEach(letter => {
      diamond.push(this.center(this.makeRow(letter), widthOfDiamond));
    });

    return `${diamond.join("\n")}\n`;
  }

  static makeRow(letter) {
    if (letter === 'A') return 'A';
    if (letter === 'B') return 'B B';

    return letter + this.determineSpaces(letter) + letter;
  }

  static maxWidth(letter) {
    if (letter === 'A') return 1;

    return this.determineSpaces(letter).length + 2;
  }

  static center(content, width) {
    let outerPad = (width - content.length) / 2;
    let padStr = (' ').repeat(outerPad);
    return `${padStr}${content}${padStr}`;
  }

  static letterRange(letter) {
    let range = [];

    for (let i = 0; i < this.alphabet.length; i++) {
      let currentChar = this.alphabet[i];

      range.push(currentChar);
      if (currentChar === letter) break;
    }

    return [...range, ...range.reverse().slice(1)];
  }

  static determineSpaces(letter) {
    let currLetterIdx = 1;
    let spaces = 1;
    let currentLetter = this.alphabet[currLetterIdx];

    while (currentLetter !== letter) {
      spaces += 2;
      currLetterIdx++;
      currentLetter = this.alphabet[currLetterIdx];
    }

    return (' ').repeat(spaces);
  }
}

module.exports = Diamond;