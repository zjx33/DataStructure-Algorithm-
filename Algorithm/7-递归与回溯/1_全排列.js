/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//  我更喜欢这种解法，其实思路是差不多的
function backtrack(nums, temp, res) {
    if (temp.length === nums.length) {
        res.push([...temp])
        return
    }
    for (let i = 0; i < nums.length; i++) {
        if (temp.includes(nums[i])) {
            continue
        }
        temp.push(nums[i])
        backtrack(nums, temp, res)
        temp.pop()
    }
}
var permute = function (nums) {
    // let curr = []
    // let res = []
    // let visited = {}
    // function dfs(nth) {
    //     if (nth === nums.length) {
    //         res.push(curr.slice())
    //         return
    //     }
    //     for (let i = 0; i < nums.length; i++) {
    //         if (!visited[nums[i]]) {
    //             curr.push(nums[i])
    //             visited[nums[i]] = 1
    //             dfs(nth + 1)
    //             curr.pop()
    //             visited[nums[i]] = 0
    //         }
    //     }
    // }
    // dfs(0)
    // return res
    const res = []
    backtrack(nums, [], res)
    return res
};