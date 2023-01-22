/**
 * @param {number} n
 * @return {number}
 */
// function helper(memo, n) {
//     if (n <= 1) {
//         return n
//     }
//     if (memo[n]) {
//         return memo[n]
//     }
//     for (let i = 2; i <= n; i++) {
//         return helper(memo, n - 1) + helper(memo, n - 2)
//     }
// }

var fib = function (n) {
    // 第一种：递归算法，但是这种如果n比较大，那算重复的就比较多，那效率就不是很好
    // if (n === 0) return 0
    // if (n === 1) return 1
    // return fib(n - 1) + fib(n - 2)
    // 递归的优化
    // let memo = []
    // return helper(memo, n)
    // 第二种：动态规划算法
    // const db = [0, 1]
    // for (let i = 2; i <= n; i++) {
    //     db[i] = db[i - 1] + db[i - 2]
    // }
    // return db[n]
    // 动态规划算法的优化，减小空间效率
    let dp1 = 0
    let dp2 = 1
    if (n <= 1) return n
    for (let i = 2; i <= n; i++) {
        dp3 = dp1 + dp2
        dp1 = dp2
        dp2 = dp3
    }
    return dp3
};