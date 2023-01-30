/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const res = []
    if (digits.length === 0) return res
    const map = { "2": 'abc', "3": 'def', "4": 'ghi', "5": 'jkl', "6": 'mno', "7": 'pqrs', "8": 'tuv', "9": 'wxyz' }
    function dfs(cur, i) {
        if (i > digits.length - 1) {
            res.push(cur)
            return
        }
        const letters = map[digits[i]]
        for (item of letters) {
            dfs(cur + item, i + 1)
        }
    }
    dfs('', 0)
    return res
};