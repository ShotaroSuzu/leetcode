export function isValid(s: string): boolean {
    const parenthesesMap = new Map([['(', ')'], ['{', '}'], ['[', ']']]);
    const stack: string[] = []

    for (const char of s) {
        if (parenthesesMap.has(char)) {
            stack.push(char)
        } else {
            const lastOpenChar = stack.pop()
            if (lastOpenChar === undefined
                || parenthesesMap.get(lastOpenChar) !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
};