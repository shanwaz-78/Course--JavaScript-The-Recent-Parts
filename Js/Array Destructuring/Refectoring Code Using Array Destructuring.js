// This is Terrible & long method.

function destructuring() {
    return [1,2,3];
};

const assignArr = destructuring();

const arrVal1 = assignArr[0];
const arrVal2 = assignArr[1];
const arrVal3 = assignArr[2];
console.log(arrVal1,arrVal2,arrVal3) // 1,2,3;

// This is easy & much preety method.

function destructuring() {
    return [1,2,3];
};

const [
    num1,
    num2,
    num3,
] = destructuring()

console.log(num1,num2,num3);

// Refectoring Code, Access an object properties using destructuring called Refector code;
const obj = {name : 'John', age : 20};

const {name,age} = {name : 'John', age : 20};
console.log(name)

function myFunction() {
    return [1,,3,4]
};

let again;
 again = [
    first,
    second = 2, // The default method pickup values only when he found undefined somewhere;
    third,
    fourth,
] = myFunction()

console.log(first);