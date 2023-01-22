/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const len = nums.length
    let maxlength = 1
    const dp = (new Array(len)).fill(1)
    if (!len) return 0
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        if (dp[i] > maxlength) {
            maxlength = dp[i]
        }
    }
    return maxlength
};