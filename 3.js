// Largest prime factor
   
// Problem 3

// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143?

let number = 600851475143;

let largestPrime = 2;

let i = largestPrime;

while(number > 1){
    if (number % i == 0){
        largestPrime = i;
        number /= i;
    }
    i++;
}

console.log(largestPrime); // Answer: 6857