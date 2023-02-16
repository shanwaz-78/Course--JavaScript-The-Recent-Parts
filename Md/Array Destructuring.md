# Array Destructuring
Destructing means decomposing a structure into its individual parts.  

```javascript
const arr = [5,10];
const [a,b] = arr;
console.log(a,b) 5,10;

```
  -------------------kyle simpson  ----------------
```javascript
const tmp = getSomeRecords();

const first = tmp[0];
const first2 = tmp[1];

const firstName = first.name;
const firstEmail = first.email !== undefined ? first.email : 'kyle@gmail.com'; 
// here i sending the default email i'm saying him give me [first.email] if he exixts then return me otherwise use this default email to assign a variable.;
console.log(firstEmail)

```
## For More Information Click Below:-
[Array Destructuring](../Js/Array%20Destructuring/)