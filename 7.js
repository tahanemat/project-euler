// 10001st prime
   
// Problem 7

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10001st prime number?

let primes = [2,3,5,7,11,13];

let i = 13;
while(primes.length < 10001){
    i += 2; // skipping even numbers
    let isPrime = true;
    for (let j = 0; j < primes.length; j++){
        if(i % primes[j] == 0){
            isPrime = false;
        }
    }
    if (isPrime){
        primes.push(i);
    }
}

console.log(primes[primes.length - 1]); // Answer: 104743