function checkStringOfBrackets(string) {
    const stack = [];
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for (let i = 0; i < string.length; i++) {
        element=string[i]
        if (element in brackets) {
            stack.push(element);
        } 
        else {
            const lastStackEl = stack.pop();
            if (brackets[lastStackEl] !== element) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
