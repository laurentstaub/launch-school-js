function compareByLength(string1, string2) {
  if (string1.length < string2.length) {
    return -1;
  } else if (string1.length === string2.length) {
    return 0;
  } else {
    return 1;
  }
}

compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0