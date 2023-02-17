// normal assignments of object

function normFn() {
    return {a : 1, b : 2};
};

const storeVal = normFn();

let firstVal,secondVal;
firstVal = storeVal.a;
secondVal = storeVal.b;

console.log(firstVal,secondVal)

// destructuring assignment in object;

function dest_assignment() {
    return {a : 1, b : 2, c : 3};
};

let firstVal1,secondVal1;

({
    a : firstVal1,
    b : secondVal1,
} = dest_assignment())

console.log(firstVal1,secondVal1);