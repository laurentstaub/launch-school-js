/*
Leet code number 13

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

Input: string
Output: number

ALGORITHM
I should be the rigthmost character. If it's not, it means that it is substracted
Same for other characters, it they are not in the right order (bigger to 
  smaller), it means we need to substract

Order M / D / C / L / X / V / I


*/

function romanToInt(roman) {
  const values = {
    'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
  };

  return roman
    .split('')
    .reduce((acc, char, index, array) => {
      if (char === 'I' && array[index + 1] === "V") return acc - 1;
      if (char === 'I' && array[index + 1] === "X") return acc - 1;
      if (char === 'X' && array[index + 1] === "L") return acc - 10;
      if (char === 'X' && array[index + 1] === "C") return acc - 10;
      if (char === 'C' && array[index + 1] === "D") return acc - 100;
      if (char === 'C' && array[index + 1] === "M") return acc - 100;
      else {
        return acc + values[char];
      }
    }, 0);
}

console.log(romanToInt('I')); // 1
console.log(romanToInt('II')); // 2
console.log(romanToInt('IV')); // 4
console.log(romanToInt('IX')); // 9
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994
console.log(romanToInt('MCDLXXVI')); // 