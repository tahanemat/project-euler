// Summation of primes
   
// Problem 10

// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

let primes = [2,3,5,7];

let sum = 2+3+5+7;

let current = 9;

while(current < 2000000){
    current += 2;
    let divisibleByAny = false;
    for (let i = 0; i < primes.length; i++){
        if (current % primes[i] == 0){
            divisibleByAny = true;
            break;
        }
    }
    if (!divisibleByAny){
        primes.push(current);
        sum += current;
    }
}

console.log(sum); // Answer: 142913828922