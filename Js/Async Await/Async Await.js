async function fetchData() {
    console.log('This is 2nd msg');
    await fetch('https://jsonplaceholder.typicode.com/users',{
        method : 'POST',
        body : JSON.stringify({
            name : 'Kyle',
            age : 22,
            designation : 'Developer'
        }),
        headers : {
            'Content-type' : 'application/json'
        }
    })
   .then((success => success.json()))
   .then((result => console.log(result)))
}
console.log('This is 1st msg');
fetchData()

//  try {
//     async function fetchJsonData() {
//         console.log('This is 1st msg');
//         await fetch('https://jsonplaceholder.typicode.com/users',{
//             method : 'POST',
//             body : JSON.stringify({
//                 Name : 'Kyle',
//                 Age : 23,
//                 Desgination : 'Developer',
//             }),
//             headers : {
//                 'Content-type' : 'application/json'
//             }
//         })
//         .then((result => result.json()))
//         .then((result2 => console.log(result2)))
        
//     }
//         console.log('This is 2nd msg');
//         fetchJsonData();
//         console.log('This is 3rd msg');
// } catch (error) {
//     console.log('Error is occured')
// }

// async function tryFn(files) {
//     const prs = files.map(getfile);

//     prs.forEach(function tmp(pr) {
//   console.log(await pr) // it's gonna be give us an error because we cannot write await inside of regular function ;