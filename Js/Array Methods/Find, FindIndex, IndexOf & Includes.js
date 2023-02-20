const arr = [{a : 10, b : 20}];
const val = arr.find(function match(v) {
    return v && v.a > 10;
}) // {b : 20};

const arr2 = [{a : 10, b : 20}];
const val2 = arr2.findIndex(function match(v) {
    return v && v.a > 100;
}) // -1 findIndex doesn't find the value it will return the -1;

const arr3 = [10,20,30,40,NaN];
console.log(arr3.includes(NaN)) // true

console.log(~arr3.indexOf(20)) // The ~ it will give us ansert is negative and count array from 1 index;