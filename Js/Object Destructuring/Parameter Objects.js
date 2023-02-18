// parameter destructuring;

function data({
    a,
    b,
}= {} ) { // Assigning default empty object;
    
}
console.log(data({a : 1, b : 2}))