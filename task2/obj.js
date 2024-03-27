const obj1 = {
    a: 1,
    str:'string',
    b: {
        c: 2,
        d: [3, 4],
    }
};
for(let i in originalObj){
    console.log(typeof originalObj[i] ==='object')
}
console.log(Object.keys(originalObj))