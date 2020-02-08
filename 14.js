// Longest Collatz sequence
   
// Problem 14

// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.

const evenSequence = (n) => {
    return n/2;
}

const oddSequence = (n) => {
    return 3*n + 1;
}

let sequence = {
    '1': 1,
    '2': 2,
    '4': 3,
    '8': 4,
    '16': 5,
    '5': 6,
    '10': 7,
    '20': 8,
    '40': 9,
    '13': 10
}

let start = 1;
let largestChain = 0;
let largestStart = 0;

while(start < 1000000){
    start++;
    let number = start;
    chain = [number];
    while (number != 1){
        if (sequence[number.toString()] != undefined){
            chain.pop();
            let chainLength = sequence[number.toString()];
            let i = 0;
            while (chain.length > 0){
                i++;
                let n = chain.pop();
                sequence[n.toString()] = chainLength + i;
            }
            if (chainLength + i > largestChain) {
                largestChain = chainLength + i;
                largestStart = start;
            }
            break;
        }
        if (number % 2 == 0){
            number = evenSequence(number);
        }
        else {
            number = oddSequence(number);
        }
        chain.push(number);
    }
}

console.log(largestStart); // Answer: 837799