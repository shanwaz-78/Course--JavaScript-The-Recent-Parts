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
const regExp6 = /for/g;
console.log(msg.match(regExp6));
const regExp7 = /(?<=u)(i.)/g;
console.log(msg.match(regExp7));

// Insert data on server using fetch();
fetch('https://jsonplaceholder.typicode.com/users',{
    method : 'POST',
    body : JSON.stringify({
        name : 'Shnwaz',
        Age : 19,
        Designation : 'Developer',
    }),
    headers : {
        'Content-type' : 'application/json',
    },
})
.then(response5 => response5.json())
.then(result5 => console.log(result5))

// AJAX
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200)
    return this.response
}

xhttp.open('GET','../Array Destructuring/Comma Sepration.js',true);
xhttp.send()