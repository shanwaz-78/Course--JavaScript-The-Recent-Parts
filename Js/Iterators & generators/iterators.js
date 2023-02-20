// In iterators we use next() function to return the values and it's doesn't go back;
 
// we cannot use iterators on an obj
const arr = [1,2,3];

const iterator = arr[Symbol.iterator]();

console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value) // It will give us the value while the arr length aren't over;

const arr2 = [10,20,30];

const iterator2 = arr2[Symbol.iterator]();
console.log(iterator2.next().value)
console.log(iterator2.next().value)
console.log(iterator2.next().value)
console.log(iterator2.next().value)  // Undefind coz the arr2 length are end over here;
console.log(iterator2.next().value) // Undefind coz the arr2 length are end over here;

// Iterators protocol doesn't suppot going backwards;