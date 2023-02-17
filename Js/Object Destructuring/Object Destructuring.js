function nor_Default() {
    return { b: 2, c: 7 }
}
var tmp = nor_Default();
var first = tmp.a;
var second = tmp.b;
var third = tmp.c;

console.log("before: " + first);
var first = tmp.a !== undefined ? tmp.a : 34;
console.log("after : " + first);

const obj = {a : 1, b : 2, c: 3};

    // a : is source and first is target.
// let tmp;
// const {
//     a : first, // we stored a property into a property;
//     c : second, // Positions does not matter in an object the matter is source. But in an array positions are matter but not source.
//     b : third,
// } = tmp = obj;