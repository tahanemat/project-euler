// Power digit sum
   
// Problem 16

// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2^1000?

const multiplyByTwo = (digits) => {
    let answer = [];
    let carry = 0;
    for (let i = digits.length-1; i >= 0; i--){
        let number = (digits[i] * 2) + carry;
        let remainder = number % 10;
        answer.unshift(remainder);
        carry = (number - remainder)/10;
    }
    while (carry > 0){
        let remainder = carry % 10;
        answer.unshift(remainder);
        carry -= remainder;
        carry /= 10;
    }
    return answer;
}

let number = [1];

for (let i = 0; i < 1000 ; i++){
    number = multiplyByTwo(number);
}

const sum = number.reduce((acc, cur) => {
    return acc + cur;
})

console.log(sum); // Answer: 1366