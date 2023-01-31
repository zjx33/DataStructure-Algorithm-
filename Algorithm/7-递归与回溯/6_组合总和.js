/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    candidates = candidates.sort((a, b) => a - b)
    const res = []
    const path = []
    function backtrack(startIndex, sum) {
        if (sum === target) {
            res.push([...path])
        }
        for (let i = startIndex; i < candidates.length; i++) {
            if (sum + candidates[i] > target) return
            path.push(candidates[i])
            backtrack(i, sum + candidates[i])
            path.pop()
        }
    }
    backtrack(0, 0)
    return res
};