// Task 1
/*
function recArr(array) {
    if (array.length <= 1) return [];

    for(let i = 0; i < array.length - 1; i++) {
        array[i] = array[i+1];
    }
    array.pop();
    return array;
}

function recArr2(array, i=0) {
    if (array.length <= 1) return [];

    if(i === array.length-1) {
        array.pop();
        return array;
    }
    array[i] = array[i+1];
    return recArr2(array, i+1);
}

let arr = [6, 78, 'B', 0, 1];
let arr1 = [1];
console.log(recArr2(arr));
*/

// Task 2
/*
function invertObj (obj) {
    let finObj = {};
    
    for(let key in obj) {
        let value = obj[key];
        if(finObj.hasOwnProperty(value)) {
            if(!Array.isArray(finObj[value])) {
                finObj[value] = [finObj[value]];
            }
            finObj[value].push(key);
            continue;
        }
        finObj[value] = key;
    }
    return finObj;
}

let obj = {
    a: '1',
    b: '2',
    c: '2'
}
console.log(invertObj(obj));
*/

// Task 3
/*
let bookList = [
{ book: 'Catcher in the Rye&quot;', readStatus: true, percent: 40},
{ book: 'Animal Farm&quot;', readStatus: true, percent: 20},
{ book: 'Solaris&quot;', readStatus: false, percent: 90 },
{ book: 'The Fall&quot;', readStatus: true, percent: 50 },
{ book: 'White Nights&quot;', readStatus: false, percent: 60 },
{ book: 'After Dark&quot;', readStatus: true, percent: 70 }
]

function collectByPercent (list) {
    return list.sort((a,b) => b.readStatus * b.percent - a.readStatus * a.percent)
}
let res = collectByPercent(bookList);
console.log(res);
*/

// Task 4
/*
function recursArr(array, num) {
    if(num === 0) return array;

    let a = array[0];
    array.shift();
    array.push(a);
    num -= 1;
    return recursArr(array, num);
}

let arr = ['a','b','c','d','e','f','g','h'];
console.log(recursArr(arr, 4));
*/
