/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function (s) {
//     const leftToRight = {
//         "{": "}",
//         "[": "]",
//         "(": ")"
//     }
//     if (!s) return true
//     let stack = []
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
//             stack.push(leftToRight[s[i]])
//         } else {
//             if (stack.pop() !== s[i]) return false
//         }
//     }
//     return !stack.length
// };
// 我更喜欢下面这种
var isValid = function (s) {
    const stack = []
    const obj = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] in obj) {
            stack.push(s[i])
        } else {
            if (obj[stack.pop()] !== s[i]) {
                return false
            }
        }
    }
    return !stack.length
};