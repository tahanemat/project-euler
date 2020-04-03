// Counting Sundays

// Problem 19

// You are given the following information, but you may prefer to do some research for yourself.

// 1 Jan 1900 was a Monday.
// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

let date = [1, 1, 1900]; // DD/MM/YYYY
let day = 1; // Day 1 is Monday, Day 7 is Sunday

const nextDay = () => {
    if (day == 7) {
        day = 1;
    }
    else{
        ++day;
    }
}

const nextDate = () => {
    date[0]++;
    if ([1, 3, 5, 7, 8, 10, 12].indexOf(date[1]) != -1) { // Months with 31 days
        if (date[0] > 31) {
            date[0] = 1;
            date[1]++;
            if (date[1] > 12) {
                date[2]++;
                date[1] = 1;
            }
        }
    }
    else if ([4, 6, 9, 11].indexOf(date[1]) != -1) { // Months with 30 days
        if (date[0] > 30) {
            date[0] = 1;
            date[1]++;
        }
    }
    else { // February
        // check if leap year or not (29 or 28)
        let leapyear = false;
        if (date[2] % 4 == 0) {
            leapyear = true;
        }
        if (date[2] % 100 == 0) {
            leapyear = false;
        }
        if (date[2] % 400 == 0) {
            leapyear = true
        }
        if (leapyear) {
            if (date[0] > 29) {
                date[0] = 1;
                date[1]++;
            }
        }
        else {
            if (date[0] > 28) {
                date[0] = 1;
                date[1]++;
            }
        }
    }
}

let count = 0;
while (date[2] != 2001){
    nextDate();
    nextDay();
    if (day == 7 && date[0] == 1 && date[2] != 1900){
        count++;
    }
}

console.log(count); // Answer: 171