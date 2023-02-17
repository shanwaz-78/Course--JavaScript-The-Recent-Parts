const arr = [1,2,[3,4],5];
 // This is method for array destructuring is more readable.
const [
    num1,
    num2,
    [
        num3,
        num4,
    ],
    num5,
] = arr;

console.log(num4) // 4