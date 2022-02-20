let animals = ["dog", "cat", "bat", "cock", "cow", "pig",
"fox", "ant", "bird", "lion", "wolf", "deer", "bear",
"frog", "hen", "mole", "duck", "goat"];

function countAnimals(string) {
  const countLetters = string => {
    let counter = {};

    for (let index = 0; index < string.length; index += 1) {
      let char = string[index];
      if (!counter[char]) counter[char] = 1;
      else counter[char] += 1;
    }

    return counter;
  }

  const isCount1Contained = (count1, count2) => {
    for (let char in count1 || !count2[char]) {
      if (count1[char] > count2[char]) return false
    }

    return true;
  }

  let stringCount = countLetters(string);
  let arrayCounts = animals.map(countLetters);

  for (let index = 0; index < arrayCounts.length; index += 1) {
    let count = arrayCounts[index];

    let filteredCount = arrayCounts.filter(count => isCount1Contained(count, stringCount));
    console.log(filteredCount);
  }
}

countAnimals('dogcat') === 2;