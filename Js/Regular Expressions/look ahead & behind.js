var str = 'Hello World';
console.log(str.match(/(l.)/g));
console.log(str.match(/(l.)$/g)); // it lookbehind ;
console.log(str.match(/(l.)(?=o)/g));

console.log(str.match(/(l.)/g))