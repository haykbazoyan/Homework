// Task 1
/*
let testWord = 'listen';
let anagrams1 = ["enlists", "google", "inlets", "banana"];

let testWord2 = 'pencil'; 
let anagrams2 = ['licnep', 'circular', 'pupil', 'nIlcpe', 'leppnec']

function correctSublist (word, anagrams) {
    let correctArr = [];
    for(let key of anagrams) {
        let test = testTwoWords(word, key);
        if(test) {
            correctArr.push(key);
        } else {continue}
    }
    
    return correctArr;
}

function testTwoWords (word1, word2) {
    let tester = false;
    if (word1.length != word2.length) {
        return false;
    }
    for(let i = 0; i < word1.length; i++) {
        for(let j = 0; j < word2.length; j++) {
            if(word1[i].toLowerCase() === word2[j].toLowerCase()) {
                tester = true;
                break;
            } else { tester = false; }
        }
        if (!tester) return false;
    }
    return true;
}
console.log(correctSublist(testWord, anagrams1));
console.log(correctSublist(testWord2, anagrams2));
*/

// Task 2
/*
let strDig = '495215';
let str = 'abcdfghz';
let num = 7;

function outNLength (digitStr, number) {
    let finAns = [];
    for(let i = 0; i < digitStr.length; i++) {
        let strdig = '';
        for(let j = i; j < number+i; j++) {
            strdig += digitStr.charAt(j);
        }
        if (strdig.length === number) {
            finAns.push(strdig);
        }
    }
    return finAns;
}
console.log(outNLength(str, num));
*/


// Task 4
/*
// concatMany([1, 2], [2, 3], [3, 4])           [1, 2, 2, 3, 3, 4]

function concatMany(...args) {
    let newArr = [];
    newArr = newArr.concat(...args);
    return newArr;
}
console.log(concatMany([1, 2], [2, 3], [3, 4], [5, 6], [7, 8]));
*/



