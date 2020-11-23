// Task 1
/*
function separateOddEven(array) {
    let odd = [];
    let even = [];

    for(let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            even.push(array[i]);
        } else {
            odd.push(array[i]);
        }
    }
    let returnObject = {
        odd,
        even
    }
    return returnObject;    
}

let arr = [45,12,3,6,17,0];
let arr1 = [1,3,5,9];
console.log(separateOddEven(arr1));
*/

// Task 2
/*
function filterRange(array, a, b) {
    let returnObject = [];

    for(let i = 0; i < array.length; i++) {
        if (array[i] > a && array[i] < b) returnObject.push(array[i]);
    }
    return returnObject;
}

let arr = [1, 10, 20, 30];
let arr1 = [100, 200, 300];
console.log(filterRange(arr, 9, 23));
*/

// Task 3
/*
function findById (frameworks, idNumber) {
    for(let i = 0; i < frameworks.length; i++) {
        if (frameworks[i]['id'] === idNumber) {
            return frameworks[i];
        }
    }
    return "No Data";
}
const frameworks = [
{ id: 1, title: "react" },
{ id: 2, title: "angular" },
{ id: 3, title: "vue" }
];
console.log(findById(frameworks, 13));
*/
