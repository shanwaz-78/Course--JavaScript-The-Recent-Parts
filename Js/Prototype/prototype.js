// It's Called Protoyple chaining;

const obj = {
    designation : 'Developer',
    salary : 70000,
};

const obj2 = {
    student : 'Shanwaz',
};

obj.__proto__ = obj2;

obj2.__proto__ = {
    name : 'kyle'
}

console.log(obj.name) // First it will find name on obj it couldn't find it it will go to prototype of obj and fnd on that it again it couldn't find them then he will find on obj2 prototype;

// function myForEach(callback) {
//     const newArr = []
//     for(let i = 0; i<this.length; i++){
//       newArr.push(callback(this[i]))
//     }
//     return newArr
// }

// Array.prototype.myForEach = myForEach;

// we cannot direct change the object prototype we can change it to make constructor function;

// function eachElement(callback) {
//     let newArr = []
//     for(let i = 0; i<this.length; i++){
//         newArr.push(callback(this[i]))
//     }
//     return newArr
// }
// Array.prototype.eachElement = eachElement;

// function eachElement(callback) {
//     this.name = callback;
// }

// eachElement.prototype.getName = function () {
//     return this.name
// }
// const obj3 = new eachElement('Kyle');
// console.log(obj3);

function myForEach(callback) {
    let newArr = []
    for(let i = 0; i < this.length; i++){
       newArr.push(callback(this[i]))
    }
}
Array.prototype.myForEach = myForEach;