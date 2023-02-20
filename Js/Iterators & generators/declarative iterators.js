const str = 'hello';

const it = str[Symbol.iterator](); // It's my own iterator the (Symbol.iterator) it's save the str values as an object after that he will invoke the funtion and through that function it will give us iterator.
console.log(it)

for(const i of str){
    console.log(i)
}

console.log([...str])