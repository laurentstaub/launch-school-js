/*
function star(number) {
  let mid = Math.floor(number / 2);

  for (let index = 0; index < number; index += 1) {
    let distToMid = Math.abs(index - mid);

    if (distToMid === 0) console.log('*'.repeat(number)); 
    else {
      let outSpace = ' '.repeat(mid - distToMid);
      let inSpace = ' '.repeat(distToMid - 1);
      console.log(`${outSpace}*${inSpace}*${inSpace}*`);
    }
  }
}
*/
/*
function star(number) {
  let midIdx = Math.floor(number / 2);
  let top = [];

  const line = (nb, idx) => {
    if (idx === midIdx) return '*'.repeat(nb); 
    let outSpace = ' '.repeat(idx);
    let inSpace = ' '.repeat(midIdx - idx - 1);
    return `${outSpace}*${inSpace}*${inSpace}*`;
  }

  for (let index = 0; index <= midIdx; index += 1) {
    top.push(line(number, index));
  }

  console.log([...top, ...top.reverse().slice(1)].join('\n'));
}
*/

function star(number) {
  let mid = Math.floor(number / 2);
  const line = (nb, dtm) => {
    if (dtm === 0) console.log('*'.repeat(nb)); 
    else {
      let outSpace = ' '.repeat(mid - dtm);
      let inSpace = ' '.repeat(dtm - 1);
      console.log(`${outSpace}*${inSpace}*${inSpace}*`);
    }
  }

  for (let index = 0; index < number; index += 1) {
    let distToMid = Math.abs(index - mid);
    line(number, distToMid);
  }
}

star(7);
/*
logs
*  *  *     *__*__*  0sp 1st 2sp 1st 2sp 1st 0sp  index = 0
 * * *      _*_*_*_  1sp 1st 1sp 1st 1sp 1st 1sp  index = 1
  ***       __***__  2sp 1st 0sp 1st 0sp 1st 2sp  index = 2
*******     *******
  ***
 * * *
 * *  *  *
*/
star(9);
