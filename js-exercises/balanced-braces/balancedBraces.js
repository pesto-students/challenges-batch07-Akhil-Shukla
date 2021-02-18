
function balancedBraces(args) {
  
  let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let char of args) {

        // If character is an opening brace add it to a stack
        if (char === '(' || char === '{' || char === '[' ) {
            stack.push(char);
        }
        //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
        else if(char === ')' || char === '}' || char === ']') {
            let last = stack.pop();

            //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
            if (char !== map[last]) {return false};
        }
    }
    // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
        if (stack.length !== 0) {return false};

    return true;
}

export {
  balancedBraces,
};
