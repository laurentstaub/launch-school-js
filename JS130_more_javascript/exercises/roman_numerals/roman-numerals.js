"use strict";

class RomanNumeral {
  static ORDER = [ "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "III", "II", "I" ];
  static ROMAN_NUMERALS = {
    I: 1,
    II: 2,
    III: 3,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  }

  constructor (number) {
    this.number = number;
  }

  toRoman() {
    let roman = "";

    while (this.number > 0) {
      for (let index = 0; index <= RomanNumeral.ORDER.length; index += 1) {
        let letter = RomanNumeral.ORDER[index];
        if (this.number - RomanNumeral.ROMAN_NUMERALS[letter] >= 0) {
          roman += letter;
          this.number -= RomanNumeral.ROMAN_NUMERALS[letter];
          index = 0;
        }
      }
    }

    return roman;
  }
}

module.exports = RomanNumeral;
