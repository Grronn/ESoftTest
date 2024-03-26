function deepCopy(obj) {
    let copy = Array.isArray(obj) ? [] : 
    obj instanceof Date ? new Date(obj) :
    obj instanceof Set ? new Set(obj) : 
    obj instanceof Map ? new Map(obj) : {};
    for (let i in obj) {
        if (typeof obj[i] === 'object' && obj[i] !== null) {
            copy[i] = deepCopy(obj[i]);
          } else {
            copy[i] = obj[i];
          }
    }
    return copy;
}

let obj = {
    number: 52,
    string: "Hello, World!",
    bool: true,
    nullValue: null,
    undefinedValue: undefined,
    array: [1, 2, 3],
    object: { 
        key: "value",
        newObj:{
            number:1
        }
     },
    date: new Date(),
    map: new Map([[1, 'one'], [2, 'two']]),
    set: new Set([1, 2, 3]),
    symbol: Symbol("id"),
    func: function() {
        console.log("string");
      }
};

let objCopy = deepCopy(obj);
console.log(obj);
console.log(objCopy);

obj.number=33;
objCopy.string="New string"
console.log(obj);
console.log(objCopy);