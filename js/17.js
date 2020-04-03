// Number letter counts
   
// Problem 17

// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

// NOTE: Do not count spaces or hyphens.

// For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters.

// The use of "and" when writing out numbers is in compliance with British usage.

let words = {
    '1': ['one','ten','eleven'],
    '2': ['two','twenty','twelve'],
    '3': ['three','thirty','thirteen'],
    '4': ['four','forty','fourteen'],
    '5': ['five', 'fifty','fifteen'],
    '6': ['six', 'sixty','sixteen'],
    '7': ['seven', 'seventy','seventeen'],
    '8': ['eight', 'eighty','eighteen'],
    '9': ['nine', 'ninety','nineteen'],
}

const numberToWordLength = (n) => {
    if (n == 1000){
        return 'onethousand'.length;
    }
    else if (n > 99){
        let digits = n.toString().split('');
        let word = '';
        word += words[digits[0]][0] + 'hundred';
        if (digits[1] != 0 || digits[2] != 0){
            word += 'and';
            if (digits[1] == 1 && digits[2] != 0){
                word += words[digits[2]][2] // x11 to x19
            }
            else if (digits[1] == 0){
                word += words[digits[2]][0]
            }
            else {
                word += words[digits[1]][1];
                if (digits[2] != 0){
                    word += words[digits[2]][0];
                }
            }
        }
        return word.length;
    }
    else if (n > 19){
        let oneth = n % 10;
        let tenth = (n - oneth)/10;
        if (oneth == 0){
            return words[tenth.toString()][1].length;
        }
        else{
            return words[tenth.toString()][1].length + words[oneth.toString()][0].length;
        }   
    }
    else if (n > 9){
        if (n == 10){
            return words['1'][1].length;
        }
        let oneth = n % 10;
        return words[oneth.toString()][2].length;
    }
    else {
        return words[n.toString()][0].length;
    }
}

let sum = 0;

for (let i = 1; i <= 1000; i++ ){
    sum += numberToWordLength(i);
}

console.log(sum); // Answer: 21124