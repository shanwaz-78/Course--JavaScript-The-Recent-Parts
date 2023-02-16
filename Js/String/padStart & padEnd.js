const str = 'Kyle';

console.log(str.padStart(8)) // If we want 8 charactor length of str without adding anything thne we can use padStart and can give it value 8.
console.log(str.padStart(8,'*')) // It will add the 4 * on starting of the str becuase the already length of str is 4 and we want 4 more and added * instead of empty creatness.

// padEnd.
console.log(str.padEnd(6));
console.log(str.padEnd(6,"$"));