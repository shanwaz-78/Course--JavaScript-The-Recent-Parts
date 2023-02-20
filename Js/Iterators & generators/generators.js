function* gen() {
    yield 1;
    yield 2; // yield allows generators to generate values;
    yield 3;
    yield 4;
};

// When we invoke a generator it will return the iterator;

const iterator = gen();
console.log(iterator.next().value) // 1

const obj = {
    a : 1,
    b : 2,
    c : 3,
    *[Symbol.iterator](){
        for (const i of Object.keys(obj)) {
            yield obj[i]
        }
    }
};
console.log(obj)