const forFunc = (arr, test) => {
    let bool = true;
    for(let elem of arr) {
        if (test(elem) === false) bool = false;
    }
    
    return bool;
}

const everyFunc = (arr, test) => {
    return arr.every(elem => test(elem));
}

let arr1 = [1,3,5];
let arr2 = [2,4,16];
let arr3 = [];

console.log("For func w/ arr1: ", forFunc(arr1, elem => elem < 10));
console.log("For func w/ arr2: ", forFunc(arr2, elem => elem < 10));
console.log("For func w/ arr3: ", forFunc(arr3, elem => elem < 10));
console.log("Every func w/ arr1: ", everyFunc(arr1, elem => elem < 10));
console.log("Every func w/ arr1: ", everyFunc(arr2, elem => elem < 10));
console.log("Every func w/ arr1: ", everyFunc(arr3, elem => elem < 10));