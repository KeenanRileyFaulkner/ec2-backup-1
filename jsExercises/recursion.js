const isEven = num => {
    if (num === 0) return true;
    else if (num === 1) return false;
    else if (Math.abs(num) === 1) return false;
    else return isEven(Math.abs(num) - 2);
}

//tests
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));