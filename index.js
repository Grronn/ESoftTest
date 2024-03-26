function checkStringOfBrackets(input) {
    const stack = [];
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for (let i = 0; i < input.length; i++) {
        element=input[i]
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
