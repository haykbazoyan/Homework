// Task 1
/*
function isogram(word) {
    let strArray = [];
    for(let i = 0; i < word.length; i++){
        strArray[i] = word.charAt(i); 
    }
    for(let i = 0; i < strArray.length-1; i++) {
        for(let j = (i+1); j < strArray.length; j++){
            if (strArray[i] === strArray[j]) {return false};
        }
    }
    return true;
}
console.log(isogram('asdfgert'));
*/

// Task 2
/*
function trueOdd(number) {
    if (number === 0) {
        return true;
    }
    let digit = number%10;
    if (digit%2 === 0) {
        return false;
    }
    number = (number - digit) / 10;
    return trueOdd(number);
}
console.log(trueOdd(13257));
*/

// Task 3 (with ERROR)

// let arr = [14, [1, [ [ [3, []] ], 1], 0]];

// function nested(array) {
//     let finArr = [];
//     function loopArr(array) {
//         if (array.length === 0) {
//             console.log('hello')
//             return finArr;
//         }
//         if(!Array.isArray(array[0])) {
//             finArr.push(array[0]);
//             array.shift();
//             return loopArr(array);
            
//         } else {
//             if(array[0].length === 0) {
                
                    
//             }
//             return loopArr(array[0]);
//         }
//     }
    
    
//     return loopArr(array);
// }
// console.log(nested(arr));


// Task 4
/*
function numberCalculation(number){
    if (number < 10) {
        return number;
    }
    let num = 0;    
    let str = String(number);
    let strArray = [];
    for(let i = 0; i < str.length; i++) { strArray.push(str.charAt(i)) }
    for(let key of strArray) {
         
        num += Number(key) 
    }
    number = num;
    return numberCalculation(number);
}

console.log(numberCalculation(999999999999));
*/

// Task 5
/*
let arr = [1,2,3,4,5,6,7];
let el = 6 ;

function binElem(array, element) {
    if(array.length == 1) {
        return array[0];
    }
    let arrLengthPart = 0;
    arrLengthPart = Math.floor(array.length / 2);
    
    if(element >= arrLengthPart) {
        array = array.slice(arrLengthPart);        
        return binElem(array, element)
    } else {
        array = array.splice(0,arrLengthPart);
        return binElem(array, element)
    }
}
console.log(binElem(arr, el));
*/

