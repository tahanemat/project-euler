// Largest palindrome product
   
// Problem 4

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

const isPalindrome = (number) => {
    if (!number && number != 0){
        return null;
    }
    let digits = number.toString();
    if(digits === digits.split('').reverse().join('')){
        return true;
    }
    return false;
}

const lowest = 100;
const highest = 999;

let highestPalindrome = 0;

for (let i = highest; i >= lowest; i--){
    for (let j = highest; j >= lowest; j--){
        const multiple = i * j;
        if (multiple < highestPalindrome){
            break; // skipping because after you have found a multiple smaller than the highest palindrome, you have to iterate on the other integer.
        }
        if (multiple > highestPalindrome && isPalindrome(multiple)){
            highestPalindrome = multiple;
        }
    }
}

console.log(highestPalindrome); // Answer: 906609