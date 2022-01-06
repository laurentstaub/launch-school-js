/*
Input: number, represents the max width of the diamond
Output: no return value, logs a diamond

ALGORITHM
Methods:
  Go up and down
  Stick 2 triangles together

function diamond(number) {
  let triangle = [];

  for (let index = 1; index <= number; index += 2) {
    triangle.push(' '.repeat((number - index) / 2) + '*'.repeat(index));
  }

  console.log([...triangle, ...triangle.reverse().slice(1)].join('\n'));
}
*/
/*
function diamond(number) {
  const line = (nb, idx) => ' '.repeat((nb - idx) / 2) + '*'.repeat(idx);

  for (let index = 1; index <= number; index += 2) {
    console.log(line(number, index));
  }

  for (let index = number - 2; index >= 1; index -= 2) {
    console.log(line(number, index));
  }
}
*/
function diamond(number) {
  for (let index = 0; index < number; index += 1) {
    let distToMid = Math.abs(index - Math.floor(number / 2));
    console.log(' '.repeat(distToMid) + '*'.repeat(number - 2 * distToMid));
  }
}
/*
function diamond(number) {
  const line = (nb, idx) => ' '.repeat((nb - idx) / 2) + '*'.repeat(idx);
  let increment = 2;
  let index = 1;

  while (index > 0) {
    if (index === number) increment = -2;
    console.log(line(number, index));
    index += increment;
  }
}
*/

// diamond(1);
// logs
//  *

diamond(3);
// logs   i  dtm
//  *     0   1
// ***    1   0
//  *     2   1

diamond(5);
// logs    i  dtm  res
//   *     0   2    1
//  ***    1   1    3  nb - 2 * dtm
// *****   2   0    5  nb
//  ***    3   1    3
//   *     4   2    1

diamond(9);
diamond(11);
diamond(13);

/*
function hollow(number) {
  const line = (nb, idx) => {
    if (idx === 1) return ' '.repeat((nb - idx) / 2) + '*'; 
    else return ' '.repeat((nb - idx) / 2) + '*' + ' '.repeat(idx - 2) + '*';
  }

  let triangle = [];

  for (let index = 1; index <= number; index += 2) {
    triangle.push(line(number, index));
  }

  console.log([...triangle, ...triangle.reverse().slice(1)].join('\n'));
}
*/

function hollow(number) {
  const line = (nb, dtm) => {
    if (dtm === mid) return ' '.repeat(dtm) + '*'; 
    else return ' '.repeat(dtm) + '*' + ' '.repeat(nb - 2 - 2 * dtm) + '*';
  }
  let mid = Math.floor(number / 2);

  for (let index = 0; index < number; index += 1) {
    let distToMid = Math.abs(index - mid);
    console.log(line(number, distToMid));
  }
}

/*
function hollow(number) {
  const line = (nb, idx) => {
    if (idx === 1) return ' '.repeat((nb - idx) / 2) + '*'; 
    else return ' '.repeat((nb - idx) / 2) + '*' + ' '.repeat(idx - 2) + '*';
  }

  let increment = 2;
  let index = 1;

  while (index > 0) {
    if (index === number) increment = -2;
    console.log(line(number, index));
    index += increment;
  }
}
*/

hollow(5);
// logs    i  dtm  res
//   *     0   2    1
//  * *    1   1    3  nb - 2 * dtm
// *   *   2   0    5  dtm * nb - 2 *
//  * *    3   1    3  dtm * nb - 2 - 2 * dtm
//   *     4   2    1

hollow(13);