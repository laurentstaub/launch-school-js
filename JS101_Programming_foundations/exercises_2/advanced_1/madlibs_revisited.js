/*
Build a madlibs program that takes a text "template" as input, plugs in a selection of randomized nouns, verbs, adjectives, and adverbs into that text, and then returns it. You can build your lists of nouns, verbs, adjectives, and adverbs directly into your program. Your program should read this text and, for each line, place random words of the appropriate types into the text and return the result.

The challenge of this program isn't just about writing your solution—it's about choosing the structure of the text templates. Choose the right way to structure your templates and this problem becomes much easier. Consequently, this exercise is a bit more open-ended since the input is also something that you'll define for yourself.

Input: template
Output: string

['The', '_{adj}_', brown]
We split the template into words
We replace a word
*/



function madlibs(template) {
  const rand = array => array[Math.floor(Math.random() * array.length)];

  const adj = ["quick", "lazy", "sleepy", "noisy", "hungry"];
  const nouns = ["fox", "dog", "head", "leg", "tail", "cat"];
  const verbs = ["jumps", "lifts", "bites", "licks", "pats"];
  const advs = ["easily", "lazily", "noisily", "excitedly"];

  return template.split(' ')
    .map(word => {
      if (word.includes('%{adj}')) return word.replace('%{adj}', rand(adj));
      if (word.includes('%{noun}')) return word.replace('%{noun}', rand(nouns));
      if (word.includes('%{verb}')) return word.replace('%{verb}', rand(verbs));
      if (word.includes('%{adv}')) return word.replace('%{adv}', rand(advs));
      else return word;
    })
    .join(' ');
}

let template1 = 'The %{adj} brown %{noun} %{adv} \n%{verb} the %{adj} yellow \n%{noun}, who %{adv} %{verb} his\n%{noun} and looks around.\n';


console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

console.log(madlibs(template1));
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

// madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

// madlibs(template2);      // The "cat" "pats" the "cat"'s "head".