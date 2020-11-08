// Lesson 1
/*
let number = Number(prompt("Please input your number: "));
 console.log((number % 2 === 0) ? 'Even' : 'Odd');
*/

// Lesson 2
/*
let num1 = 0;
let sum = 0;
let average = 0;

for(let i = 0; i < 5; i++) {
    num1 = Number(prompt('Please input number:'));
    sum += num1;
}
average = sum / 5;
console.log(average);
*/

// Lesson 3
/*
let inputNumber = prompt("Please input number:");
let lastChar;
let finNumber = 0;

lastChar = Number(inputNumber.charAt(inputNumber.length-1));

if (lastChar === 0) {
    console.log(inputNumber);
} else {
    finNumber = lastChar;
    for (let i = 0; i < inputNumber.length-1; i++) {
        finNumber += inputNumber.charAt(i);
    }
    console.log(finNumber);
}
*/


// Lesson 4
/*
let inputNumber = Number(prompt("Please input number:"));

if (inputNumber % 3 === 0 || inputNumber % 5 === 0 || inputNumber % 7 === 0) {
    if (inputNumber % 3 === 0 && inputNumber % 5 === 0 && inputNumber % 7 === 0) {
        console.log(inputNumber + " is a multiple of 3, 5 and 7");
    } else if(inputNumber % 3 === 0 && inputNumber % 5 === 0) {
        console.log(inputNumber + " is a multiple of 3 and 7");
    } else if (inputNumber % 3 === 0 && inputNumber % 7 === 0) {
        console.log(inputNumber + " is a multiple of 3 and 7");
    } else if (inputNumber % 5 === 0 && inputNumber % 7 === 0) {
        console.log(inputNumber + " is a multiple of 5 and 7");
    } else {
        console.log(inputNumber + " is a multiple of 3");
    }
} else {
    console.log(inputNumber + " is not a multiple of 3, 5 or 7.");
}
*/