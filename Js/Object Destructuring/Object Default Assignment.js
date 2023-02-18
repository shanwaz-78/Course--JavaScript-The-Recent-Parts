function assign_dest() {
    return {a : 1, b : 2};
};

let firstVal,SecondVal;

({
    a : firstVal,
    b : SecondVal,
} = assign_dest());

function assign_dest2() {
    return;
};

let tmp;
tmp =  {
    a : firstVal = 10, // first default assignment method.
    b : SecondVal,
} = assign_dest2() || {}; // second default assinment method.
console.log(tmp)

function assign_dest3() {
    return {a : 5, b :6};
};

let tmp2;
tmp2 =  {
    a, // if we want to create a same name of variable of object property name we can assign it once;
    b, // we saying him find the b property on that function if he exists then assign it to the same name variable;
} = assign_dest3() || {}; 
console.log(tmp2)
