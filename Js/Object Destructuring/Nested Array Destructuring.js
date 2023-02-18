const obj = {
    a : 1,
    b : [100,200],
    c : 3,
};

let firstVal,secondVal;
let tmp;
({
    a : firstVal,
    b : [
        d,
        e,
    ],
    c : secondVal,
} = tmp = obj) || {};

console.log(tmp)
console.log(d + e)
console.log(secondVal)