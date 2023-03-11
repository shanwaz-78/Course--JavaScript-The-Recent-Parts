const arr = [1,2,[3,4],5];
 // This is method for array destructuring is more readable.
const [
    num1,
    num2,
    [
        num3,
        num4,
    ],
    num5,
] = arr;

console.log(num4) // 4

// Object Parameters;
function objPara({firstName,lastName}) {
    console.log(`Hello,${firstName} ${lastName}`);
}

objPara({firstName : 'john',lastName : 'byro'})

// object destructuring wiht assign seprate variables name not same;
const obj = {
    firstName : 'John',
    lastName : 'Byro',
};

const {
    firstName : first,
    lastName : last
} = obj
console.log(last)

// Nested Object Destructuring along assign to seprate variable name;

const obj3 = {
    userName : 'Kyle',
    userAge : 27,
    nest : {
        userDesignation : undefined,
    },
};

const {
    userName : user,
    userAge : user2,
    nest : {
        userDesignation : designation = 'Developer',
    },
} = obj3;

console.log(designation)