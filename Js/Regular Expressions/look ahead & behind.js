var str = "Hello World";
console.log(str.match(/(l.)/g));
console.log(str.match(/(l.)$/g)); // it lookbehind ;
console.log(str.match(/(l.)(?=o)/g));

console.log(str.match(/(l.)/g)); // in this regExp the () called capturing operators coz he capturing value l;
const regExp = /hello world/i;
console.log(str.match(regExp));

const regExp2 = /(l.)/g; // it will find from both strings and im saying him find the l and it will also return the nearest thing of my mathing;
console.log(str.match(regExp2));

const regExp3 = /(l.)$/g; // $ it will find from backwards from the string;
console.log(str.match(regExp3));

const regExp4 = /(l.)(?=o)/g; // im saying him match l where ever l is too much closing over o;
console.log(str.match(regExp4));

const regExp5 = /(?<=e)(l.)/g; // it will find from hello and he will find l where ever l is nearest from e;
console.log(str.match(regExp5));

const msg = "The quick brown for jumps over the lazy dog";
const regExp6 = /brown.*over/s;
console.log(msg.match(regExp6));
const regExp7 = /(?<=u)(i.)/g;
console.log(msg.match(regExp7));
console.log('\n')