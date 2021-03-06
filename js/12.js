// Highly divisible triangular number
   
// Problem 12

// The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28.

// The first ten terms would be:

// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

// Let us list the factors of the first seven triangle numbers:

//  1: 1
//  3: 1,3
//  6: 1,2,3,6
// 10: 1,2,5,10
// 15: 1,3,5,15
// 21: 1,3,7,21
// 28: 1,2,4,7,14,28

// We can see that 28 is the first triangle number to have over five divisors.

// What is the value of the first triangle number to have over five hundred divisors?


const numberOfDivisors = (number) => {
    let i = 1;
    let divisors = {};
    while(number > 1){
        i++;
        while(number % i == 0){
            number /= i;
            if(divisors[i.toString()] == undefined){
                divisors[i.toString()] = 1;
            }
            else {
                divisors[i.toString()] += 1;
            }
        }
    }
    let numberOfDivisors = 1;
    for (n in divisors){
        numberOfDivisors *= divisors[n] + 1;
    }
    return numberOfDivisors;
}

let current = 1;
let number = 1;
while(true){
    current++;
    number += current;
    let divisors = numberOfDivisors(number);
    if (divisors > 500){
        console.log(number); // Answer: 76576500
        break;
    }
}