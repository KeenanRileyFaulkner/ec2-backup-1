let arr = [[1,2,3], [4,5], [6]];

const flatten = arrOfArrs => {
    return arr.reduce((prev, curr) => prev.concat(curr), []);
}

console.log(flatten(arr));