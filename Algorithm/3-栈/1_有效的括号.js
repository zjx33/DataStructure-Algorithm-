/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const leftToRight = {
        "{": "}",
        "[": "]",
        "(": ")"
    }
    if (!s) return true
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
            stack.push(leftToRight[s[i]])
        } else {
            if (stack.pop() !== s[i]) return false
        }
    }
    return !stack.length
};