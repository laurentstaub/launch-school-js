/*
function swapName(name) {
  return name.split(' ').reverse().join(", ");
}
*/

function swapName(name) {
  let array = name.split(' '); // ['First', ..., 'Last']
  return array.slice(-1) + ', ' + array.slice(0, -1).join(' ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));