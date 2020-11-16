// Task 1
/*
function largerNumbers(arr, number) {
    let newArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > number) {
            newArray.push(arr[i]);
        }
    }

    if (newArray.length === 0) {
        let text = 'Such values do not exist.';
        return text;
    }

    return newArray;
}


let arr = [10, 25, 16, -5, 30, 15, 24];
console.log(largerNumbers(arr, 50));
*/

// Task 2
/*
function findEvenNumbers(firstNumber, secNumber) {        
    let newArray = [];

    for(let i = firstNumber; i <= secNumber; i++) {
        let numString = i.toString(); 
        let checker = false;                              
        for(let j = 0; j < numString.length; j++) {
            if(Number(numString.charAt(j)) % 2 === 0) {
                checker = true;
            } else {
                checker = false;
                break;
            }
        }
        if(checker) {
            newArray.push(i);
        }
    }
    if (newArray.length === 0) {
        let message = 'Such numbers does not exist.';
        return message;
    } else {
        for (let i = 0; i < newArray.length; i++) {
            let finalNumbers = newArray.toString();
            return finalNumbers;
        }
    }
}

console.log(findEvenNumbers(99, 199));
*/

// Task 3
/*                                
 function array(arr) {
    let n = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if (n > arr[i]) {
            return i;
        } else {
            n = arr[i];
        }
    }
    return -1;
 }

let ar = [-9, -4, -4, 3, 12, 4, 5];
let ar1 = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(array(ar1));
*/