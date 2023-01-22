/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const len = coins.length
    const dp = []
    dp[0] = 0
    for (let i = 1; i <= amount; i++) {
        dp[i] = Infinity
        for (let j = 0; j < len; j++) {
            if (i - coins[j] >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
            }
        }
    }
    if (dp[amount] === Infinity) return -1
    return dp[amount]
};