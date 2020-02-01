// Smallest multiple
   
// Problem 5

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const primeFactors = (number) => {
    let primeFactors = [];
    let i = 2;
    while (number > 1){
        while (number % i == 0){
            number /= i;
            primeFactors.push(i);
        }
        i++;
    }
    return primeFactors;
}

let divisors = {};

for (let i = 10; i <= 20; i++){ // we can ignore numbers 1 to 10 because 11 to 20 all have divisors included in them
    
    // break i into its prime factors
    
    let listOfPrimes = primeFactors(i);
    
    // check if prime factors exist in the divisors array and add them if they aren't
    
    let count = {};
    for (let j = 0; j < listOfPrimes.length; j++){
        if (count[listOfPrimes[j]] == undefined){
            count[listOfPrimes[j]] = 1;
        }
        else if (count[listOfPrimes[j]]){
            count[listOfPrimes[j]] += 1;
        }
    }
    for (number in count){
        if(divisors[number] == undefined){
            divisors[number] = count[number];
        }
        if(divisors[number] < count[number]){
            divisors[number] = count[number];
        }
    }
}

let smallestNumber = 1;

for(number in divisors){
    smallestNumber *= Number(number) ** divisors[number];
}

console.log(smallestNumber); // Answer: 232792560