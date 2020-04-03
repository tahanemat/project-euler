// Amicable numbers
   
// Problem 21

// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).

// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

// Evaluate the sum of all the amicable numbers under 10000.

const d = (n) => {
    if (n == 1) return 1;
    let divisors = [];
    let current = n;
    while (current > 1){
        current--;
        if (n % current == 0) divisors.push(current);
    }
    let sum = divisors.reduce((acc, cur) => {
        return acc + cur;
    })
    return sum;
}

let amicable = [];
let a = 1;

while (a <= 10000){
    let b = d(a);
    if (a != b && d(b) == a && d(a) == b){
        amicable.push(a)
    }
    a++;
}

let sum = amicable.reduce((acc, cur) => {
    return acc + cur;
});

console.log(sum); // Answer: 31626