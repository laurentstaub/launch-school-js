function numberRange(number) {
  switch(number) {
    case number >= 0 && number <= 50:
      console.log(`${number} is between 0 and 50`);
      break;
    case number > 50 && number <= 100:
      console.log(`${number} is between 51 and 100`);
      break;
    case number > 100:
      console.log(`${number} is less than 0`);
      break;
    default:
      console.log(`${number} is less than 0`);
  }  
}