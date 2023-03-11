// Templete strings is new feature of js and came in Es6 it also known as string interpolation we use it with backtick and it more helps us to write complex string (String concatenation or combine smaller strings);

const name = 'Anderson';
const Email = 'ander7@gmail.com';

const msg = 'The Name Is ' + name + 'For Contact ' + Email;
console.log(msg) // It's more confusable and stuff to concatinate instead of this we can use ->

console.log(`The name is ${name} for contact ${Email}`)

// $name defines the expression .

// we say template but it's not template, its already a string

//to know easy simple it is an example like IIFE . and IIFE works when we involed. so same thing  happens with string it is immediately goes and construct.

    // Destructurng with function;
function myFunction([first,second,,,third]) {
    console.log(first)
    console.log(second)
    console.log(third)
}

myFunction([1,2,3,4,5])