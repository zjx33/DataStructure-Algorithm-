/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    const stack = []
    for (item of s) {
        let len = stack.length
        if (item === stack[len - 1]) {
            stack.pop()
            continue
        }
        stack.push(item)
    }
    return stack.join("")
};