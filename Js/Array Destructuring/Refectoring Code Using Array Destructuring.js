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