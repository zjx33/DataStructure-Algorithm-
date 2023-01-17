/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    let len = T.length
    let stack = []
    let res = (new Array(len)).fill(0)
    for (let i = 0; i < len; i++) {
        while (T[i] > T[stack[stack.length - 1]]) {
            let top = stack.pop()
            res[top] = (i - top)
        }
        stack.push(i)
    }
    return res;
};