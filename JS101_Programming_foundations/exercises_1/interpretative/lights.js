/*
function lightsOn(number) {
  let result = [];
  let increment = 1;

  for (let index = 1; index <= number; index += increment) {
    result.push(index);
    increment += 2;
  }

  return result;
}
*/

function lightsOn(number) {
  let result = [];

  for (let index = 1; index ** 2 <= number; index += 1) {
    result.push(index ** 2);
  }

  return result;
}

console.log(lightsOn(0));        // []
console.log(lightsOn(1));        // [1]
// round 0: X
// round 1: O
console.log(lightsOn(2));        // [1]
// round 0: XX
// round 1: OO
// round 2: OX
console.log(lightsOn(3));        // [1]
// round 0: XXX
// round 1: OOO
// round 2: OXO
// round 3: OXX
console.log(lightsOn(4));        // [1, 4]
// round 0: XXXX
// round 1: OOOO
// round 2: OXOX
// round 3: OXXX
// round 4: OXXO
console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round O: XXXXX
// Round 1: OOOOO  all lights ON
// Round 2: OXOXO  lights 2 and 4 OFF; 1, 3, and 5 ON
// Round 3: OXXXO  lights 2, 3, and 4 OFF; 1 and 5 ON
// Round 4: OXXOO  lights 2 and 3 OFF; 1, 4, and 5 ON
// Round 5: OXXOX  lights 2, 3, and 5 OFF; 1 and 4 ON

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
                    //    3  5  7   9   11  13  15  17  19