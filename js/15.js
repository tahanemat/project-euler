// Lattice paths
   
// Problem 15

// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

// Refer to diagram at 'https://projecteuler.net/problem=15'

// How many such routes are there through a 20×20 grid?

const factorial = (n) => {
    let factorial = 1;
    while (n > 1){
        factorial *= n;
        n--;
    }
    return factorial;
}

const combination = (n, r) => {
    let numerator = factorial(n);
    let denominator = factorial(r) * factorial(n-r);
    let answer = numerator / denominator;
    return answer;
}

// In all possibilites you have to take 20 down and 20 right steps in any order (non-repetitive)

// This equates to nCr where n = 40 and r = 20;

let routes = parseInt(combination(40, 20));

console.log(routes); // Answer: 137846528820