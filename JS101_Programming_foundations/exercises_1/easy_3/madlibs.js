/*
Madlibs is a simple game where you create a story template with "blanks" for
words. You, or another player, then construct a list of words and place them
into the story, creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb, and
an adjective, and injects them into a story that you create.

PROBLEM
-------


Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.

CODE
----
*/

const readline = require('readline-sync');

let noun = readline.question('Enter a noun: ');
let verb = readline.question('Enter a verb: ');
let adjective = readline.question('Enter an adjective: ');
let adverb = readline.question('Enter an adverb: ');

console.log(`
Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!
The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.
The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.
`);