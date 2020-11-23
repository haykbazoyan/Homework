// Task 4
// Example 1
/*
function ObjectGenConstructor(title, idx) {
    this.title = title;
    this.idx = idx;
}

function objGen(array) {
    let retObject = [];

    for(let i = 0; i < array.length; i++) {
        retObject[i] = new ObjectGenConstructor(array[i], i);
    }
    return retObject;
}
*/
// Example 2
/*
function objectGenConstructor(title, idx) {
    const arr = {
        title: title,
        idx: idx
    }
    return arr;
    
}
function objGen(array) {
    let retObject = [];

    for(let i = 0; i < array.length; i++) {
        retObject[i] = objectGenConstructor(array[i], i);
    }
    return retObject;
}

const arr = ['Godfather', 'Whiplash', 'Social Network'];
console.log(objGen(arr));
*/

// Task 5
/*
function removeByLetter(array, letter) {
    let returnObject = [];
    for (let i = 0; i < array.length; i++){
        if ((array[i].charAt(0)).toLowerCase() !== letter) {
            returnObject.push(array[i])
        }
    }
    return returnObject;
}
const arr = ['Godfather', 'Game of thrones', 'Social Network'];
const arr1 = ['Manchester City', 'Milan', 'Marseille'];
console.log(removeByLetter(arr1, 'g'));
*/

// Task 6
/*
function repeats (longString, shortString) {
    let changeString = '';
    let lengthDifference = longString.length - shortString.length;

    do {
        for (let i = 0; i < shortString.length; i++) {
            changeString += shortString.charAt(i);
            if (changeString.length === longString.length) break;
        }
    }while(changeString.length !== longString.length);

    return changeString;
}

function lengthThen(string1, string2) {
    let res;
    if (string1 > string2) {
        res = repeats(string1, string2);
        return res;
    } else {
        res = repeats(string2, string1);
        return res;
    }
}
console.log(lengthThen("abcdefg", "ab"));
console.log(lengthThen("ingenius", "forest"));
console.log(lengthThen("clap", "skipping"));
*/