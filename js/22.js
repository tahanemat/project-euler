// Names scores
   
// Problem 22

// Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

// For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

// What is the total of all the name scores in the file?

var fs = require('fs');

let input = fs.readFileSync('../p022_names.txt', 'utf8');

let score = input.split(',').map((Element) => {
    return Element.slice(1,-1); // removing apostrophes
}).sort().map((Element, index) => {
    let score = 0;
    for (const letter of Element){
        score += letter.charCodeAt() - 64;
    }
    return score * (index + 1);
}).reduce((acc, cur) => {
    return acc + cur;
});

console.log(score); // Answer: 871198282