// A spread operator is effective only when used within array literal , function calls, or intialized properties objects. So effectively it does the opposite thing from the rest operator.

const spread_op = "The Pain"

console.log(spread_op) //normal
console.log(...spread_op) // spread operation -- it will spread each letter.
console.log([...spread_op]) // it will return with strings


// spread operator in function

const numbers = [1, 2, 3, 5, 7];

function sum(a, b, c, d) {
    return a + b + c + d
}

console.log(sum(...numbers)) // it will get only return values rather than how many values are intalized.


// we can also assign objects;
function classroom1() {

    return ["1", "6", "3"]

}

var tmp = classroom1();
var firstclass, secondclass, thirdclass;
var o = {};

o.firstclass = tmp[0];
o.secondclass = tmp[1];
o.thirdclass = tmp[2];

console.log(o.secondclass);
console.log(o)