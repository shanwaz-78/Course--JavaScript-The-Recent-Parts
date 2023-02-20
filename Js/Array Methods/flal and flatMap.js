const nestArr = [1,2,3,[4,5],[[6,7]]];

const nestArrVal = nestArr.flat(Infinity);

console.log(nestArrVal)


const arr2 = [1,2,3].flatMap(v=> [v * 2, String(v * 2)]);
console.log(arr2)