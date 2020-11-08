// Lesson 5
/*
let result = '';
let size = Number(prompt('Please input number:'));    // 5
let symbType = '*';
let tab = ' ';

for (let i = 0; i < size * 2-1; i++) {
    let line = '';
    for (let j = 0; j < size * 2; j++) {
        if (j === i || j === (size*2 -i-2)) {
            line += symbType;
        } else {
            line += tab;
        }
    }
    result += line + '\n';
}

console.log(result);
*/

// Lesson 6
/*
function calculator (number1, operator, number2) {
    let result = 0;
    if (operator === '/' && number2 === 0) {
        result = `Can't divide by 0`;
        return result;
    }

    switch (operator) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '%':
            return number1 % number2;
        default:
            return number1 / number2;
    }
}
let number1 = Number(prompt("Please input first number:"));
let operator = prompt("Please input operator:");
let number2 = Number(prompt("Please input second number:"));

console.log(calculator(number1, operator, number2));
*/

// Lesson 7
/*
function intWithInBounds(number, lowerNum, upperNum) {
    let numFloor = Math.floor(number);
    if (number % numFloor != 0) return false;

    if (number > lowerNum && number < upperNum) {
        return true;
    } else return false;
}

console.log(intWithInBounds(4, 1, 8));
*/

// Lesson 8
/*
function hasKey (obj, keyName) {
    let checker = false;

    for(let key in obj) {
        if (keyName === key){
            checker = true;
            break;
        }
    }
    return checker;
}

let obj1 = {
    a: 1,
    b: 2,
    not: 3,
}

console.log(hasKey({a: 1, b: 2, not: 3}, "not"));
*/

// Lesson 9
/*
function add_suffix(suf) {
    return function (word) {
        return word + suf;
    }
}

let add_ly = add_suffix("ly");
console.log(add_ly('hopeless'));

let add_less = add_suffix('less');
console.log(add_less('fear'));
*/