/*
PROBLEM
Build a madlibs program that takes a text "template" as input, plugs in a selection of randomized nouns, verbs, adjectives, and adverbs into that text, and then returns it. You can build your lists of nouns, verbs, adjectives, and adverbs directly into your program. Your program should read this text and, for each line, place random words of the appropriate types into the text and return the result.

The challenge of this program isn't just about writing your solution—it's about choosing the STRUCTURE of the text TEMPLATES. Choose the right way to structure your templates and this problem becomes much easier. Consequently, this exercise is a bit more open-ended since the input is also something that you'll define for yourself.

EXAMPLES (see below)

DATA STRUCTURE
arrays or objects, template literals

ALGORITHM
build 2 templates: template1 and template2
Then, replace each placeholder with a random value from the array/object

*/

let template2 = `The "%{noun}" "%{verb}" the "%{noun}"'s "%{noun}"`;

function madlibs(template) {
  
  const words = {
    adjectives: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    nouns: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
    verbs: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    adverbs: ['easily', 'lazily', 'noisily', 'excitedly'],
  }
  
  const random = wordsArray => {
    let length = wordsArray.length;
    let randomIndex = Math.floor(Math.random() * length);
    return wordsArray[randomIndex];
  }

  const match = template => {
    let matches = template.match(/%{adj}|%{noun}|%{verb}|%{adv}/g)
    if (matches === null) return false;
    return matches.length;
  }
  
  while (match(template)) {
    template = template.replace(/%{adj}/, random(words['adjectives']));
    template = template.replace(/%{noun}/, random(words['nouns']));
    template = template.replace(/%{verb}/, random(words['verbs']));
    template = template.replace(/%{adv}/, random(words['adverbs']));
  }

  return template;
}


console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".
console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".