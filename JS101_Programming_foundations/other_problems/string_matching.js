function stringMatching (array) {
  let result = [];
  
  for (let idx = 0; idx < array.length; idx += 1) {
    
    for (let jdx = 0; jdx < array.length; jdx += 1) {
      if (idx === jdx) continue;
      if (array[jdx].includes(array[idx]) && !result.includes(array[idx])) {
        result.push(array[idx]);
      }
    }
  }

  return result
}
