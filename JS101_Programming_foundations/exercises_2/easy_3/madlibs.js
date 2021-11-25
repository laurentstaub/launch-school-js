/*
PROBLEM
Madlibs is a simple game where you create a story template with "blanks" for words. You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.
*/
const readline = require('readline-sync');
const words = {};

words.noun = readline.question('Enter a noun: ');
words.verb = readline.question('Enter a verb: ');
words.adj = readline.question('Enter an adjective: ');
words.adv = readline.question('Enter an adverb: ');

console.log(`
Do you walk your ${words.adj} ${words.noun} ${words.adv}? That's hilarious!
The ${words.adj} ${words.noun} ${words.verb}s ${words.adj} over the lazy ${words.noun}.
The ${words.noun} ${words.adv} ${words.verb}s up ${words.adj} Joe's turtle.
`);