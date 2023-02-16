const arr = [10,20];

const [num1,num2] = arr;

console.log(num1,num2) // 10, 20

const arr2 = [10,20,30,40,50,60];
const [nestArr,...rest] = arr2; // nestArr contains only 10 values and rest contains all remaining values;
console.log(nestArr)

const arr3 = [10,20,30,40,50,60];
const [nestArr2,,...rest2] = arr3; // again nestArr2 contains 10 values but the rest contains values from 30 becuase we gave it empty comma so the 20 values went to that comma and it's remaining values from 30;
console.log(rest2)

        // ------------According to Kyle Simpson--------------
const tmp = getAllRecords();

const first = tmp[0];
const first2 = tmp[1];

const firstName = first.name;
const firstEmail = first.email !== undefined ? first.email : 'Kyle7@gmail.com';
// here we giving a default email we saying him if first.email is exists then return it otherwise use this default value for assigning to a variable.;
console.log(firstEmail)

        // Convert an array to object using spread operator.
const arr4 = [5,10];
console.log({...arr4})