function nest_dest() {
    return {a : 1 , b : {
        c : 2,
        d : 3,
    }};
};

let tmp;
 tmp = {
    a,
    b : {
        c,
        d,
    },
} = nest_dest() ||{};

console.log(a + c + d)
console.log(tmp)
console.log(d)