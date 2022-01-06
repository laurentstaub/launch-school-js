
function isBlockWord(word) {
  let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];

  let wordArray = word.toUpperCase().split('');

  for (let idx = 0; idx < wordArray.length; idx += 1) {
    let index = blocks.findIndex(block => block.includes(wordArray[idx]));
    if (index === -1) return false;
    else blocks.splice(index, 1);
  }

  return true;
}

/*
function isBlockWord(word) {
  let counts = {
    BO: 0, 
    XK: 0, 
    DQ: 0,
    CP: 0,
    NA: 0,
    GT: 0,
    RE: 0,
    FS: 0,
    JW: 0,
    HU: 0,
    VI: 0,
    LY: 0,
    ZM: 0,
  };

  word.toUpperCase()
    .split('')
    .forEach(char => {
      for (let key in counts) {
        if (key.includes(char)) counts[key] += 1;
      };
    });

  return Object.values(counts).every(key => key <= 1);
}
*/

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false