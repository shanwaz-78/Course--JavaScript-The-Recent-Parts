// Tagged Templete Literels we use it in function;

const name = 'Anderson';
const Age = 21;
const Designation = 'Developer';
// String values & expressions they both returns an array.
function containStrArr(string, ...rest) { // string it will contain only string values and the remaining expressions will goes to on rest.
    // return string[1]; It will return the [And Age Is] because the string para containing only string values.
    return rest[2] // It will return the [Designation] because rest containing only Expressions;
}
console.log(containStrArr `Student Name Is ${name} And Age Is ${Age} And Designation Is ${Designation}`)

// Second Method.

function secondFn(string,expression1,expression2,expression3) { // give it para according to your expressions.
    return expression1; // Anderson
}
console.log(secondFn `Teahcer Name Is ${name} & Age Is ${Age} And Work Is ${Designation}`);