// Task 4
/*
function largerProduct(arr) {
    let largerNumber = 0;

    for(let i = 0; i < arr.length; i++) {
        let checkNum = arr[i]+arr[i+1];
        if (largerNumber < checkNum) {
            largerNumber = checkNum;
        } else {
            continue;
        }
    }
    return largerNumber;
}

let array = [2,1,3,5,4,7,6];
console.log(largerProduct(array));
*/

// Task 5
/*

function missedNumber(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] < arr[j]) {
                continue;
            } else {
                let num = arr[i];
                arr[i] = arr[j];
                arr[j] = num;
            }
        }
    }

    let maxNumber = arr[arr.length-1];
    
    for(let i = 0; i < maxNumber-1; i++) {
        if (arr[i] + 1 != arr[i+1]) {
            arr.splice(i+1, 0, arr[i]+1);
        } 
    }      
    return arr;
}
let array = [1,4,3,6,5,8];    // 2  7 
console.log(missedNumber(array));
*/

// Task 6
/*
function arraysSum(globArr) {
    let arrSum = [];
    function arraysElementsSum (array) {
        let sum = 0;
        for(let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }

    for(let i = 0; i < globArr.length; i++) {
        arrSum.push(arraysElementsSum(globArr[i]));
    }

    return arrSum;
}

console.log(arraysSum([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]));
console.log(arraysSum([[ 8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0, -1]]));
console.log(arraysSum([[1], [2], [3], [4]]));
*/

// Task 7
/*
function oddMultipyArray(arr) {
    let newArrLength = 0;
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 != 0) {
            newArrLength += 1;
            newArr.push(arr[i]);
        }
    }
    for(let i = 0; i < newArrLength; i++) {
        newArr[i] = newArr[i] * newArrLength;
    }


    return newArr;

}

let arr = [5, 4, 78, 0, -3, 7];
let arr1 = [2, 4, 6, 88];

console.log(oddMultipyArray(arr));
*/