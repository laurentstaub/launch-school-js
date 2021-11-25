function centerOf(string) {
  let len = string.length;
  return len % 2 === 0 ?
    string[len / 2 - 1] + string[len / 2] :
    string[Math.floor(len / 2)]; 
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"