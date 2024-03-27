function deepCopy(obj, visited = new WeakMap()) {
    if (visited.has(obj)) {
        return visited.get(obj);
    }
    let copy = Array.isArray(obj) ? [] : 
    obj instanceof Date ? new Date(obj) :
    obj instanceof Set ? new Set(obj) : 
    obj instanceof Map ? new Map(obj) : {};
    visited.set(obj, copy);
    for (let i in obj) {
        if (typeof obj[i] === 'object' && obj[i] !== null) {
            copy[i] = deepCopy(obj[i], visited);
          } else {
            copy[i] = obj[i];
          }
    }
    
    return copy;
}

