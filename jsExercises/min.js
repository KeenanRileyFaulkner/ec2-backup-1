const min = (num1, num2) => {
    let answer;
    num1 - num2 < 0 ? answer = num1 : answer = num2;
    return answer;
}

//Examples to show it works
console.log(min(10,0));
console.log(min(-10,0));
console.log(min(10,-10));