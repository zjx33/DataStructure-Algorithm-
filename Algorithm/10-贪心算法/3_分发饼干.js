/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    let ret = 0
    let index = s.length - 1
    g = g.sort((a, b) => a - b)
    s = s.sort((a, b) => a - b)
    for (let i = g.length - 1; i >= 0; i--) {
        if (s[index] >= g[i]) {
            ret++
            index--
        }
    }
    return ret
};