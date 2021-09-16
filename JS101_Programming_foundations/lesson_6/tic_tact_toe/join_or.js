/*
function joinOr(array, separator1 = ", ", separator2 = "or ") {
  if (array.length === 0) return [];
  if (array.length === 1) return array;
  if (array.length === 2) {
    return array[0] + " " + separator2 + array[1];
  }

  let lastElement = array[array.length - 1];
  let array1 = array.slice(0, array.length - 1);
  
  return array1.join(separator1) + separator1 + separator2 + lastElement;
} 
*/

function joinOr(array, separator1 = ", ", separator2 = "or") {
  switch (array.length) {
    case 0: return "";
    case 1: return array[0];
    case 2: return array[0] + " " + separator2 + " " + array[1];
    default:
      let lastElement = array[array.length - 1];
      let array1 = array.slice(0, array.length - 1);
      
      return array1.join(separator1) + separator1 + separator2 + " " + lastElement;
  }
} 


console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([5]));                     // => "5"
console.log(joinOr([1, 2]));                  // => "1 or 2"