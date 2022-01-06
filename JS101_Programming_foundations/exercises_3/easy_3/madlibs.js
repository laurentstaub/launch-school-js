/*
Madlibs is a simple game where you create a story template with "blanks" for words. You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.
*/

const readline = require('readline-sync');

let noun = readline.question('Enter a noun: ');
let verb = readline.question('Enter a verb: ');
let adj = readline.question('Enter an adjective: ');
let adv = readline.question('Enter an adverb: ');

console.log(`
Do you ${verb} your ${adj} ${noun} ${adj}? That's hilarious!
The ${adj} ${noun} ${verb}s ${adj} over the lazy ${noun}.
The ${noun} ${adv} ${verb}s up ${adj} Joe's turtle.
`);