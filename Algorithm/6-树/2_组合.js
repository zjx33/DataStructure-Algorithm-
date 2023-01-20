/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let res = []
    let subset = []
    function dfs(index) {
        if (subset.length === k) {
            res.push(subset.slice())
            return
        }
        for (let i = index; i <= n; i++) {
            subset.push(i)
            dfs(i + 1)
            subset.pop()
        }
    }
    dfs(1)
    return res
};