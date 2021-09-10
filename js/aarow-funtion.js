"use strict";
/// normal funtion 
function add(num1, num2) {
    return num1 + num2;
}
/// arrow funtion
const add2 = (num1, num2) => num2 + num1;
// return in  a funtion
const odMath = (x, y) => {
    const sum = x + y;
    const mul = sum * x;
    return mul;
};
// No return in a  funtion
const doMath2 = (x, y) => {
    const sum = x + y;
    const mul = sum * x;
};
