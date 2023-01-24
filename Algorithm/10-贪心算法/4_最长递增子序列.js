/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    // 1.动态规划解法
    // let maxLength = 1
    // let dp = (new Array(nums.length)).fill(1)
    // for (let i = 1; i < nums.length; i++) {
    //     for (let j = 0; j < i; j++) {
    //         if (nums[j] < nums[i]) {
    //             dp[i] = Math.max(dp[i], dp[j] + 1)
    //         }
    //     }
    //     if (dp[i] > maxLength) {
    //         maxLength = dp[i]
    //     }
    // }
    // return maxLength
    // 2.贪心加二分
    let arr = [nums[0]]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > arr[arr.length - 1]) {
            arr.push(nums[i])
        } else {
            // 在arr里面找到比nums[i]大的一个元素，这俩进行替换
            let left = 0
            let right = arr.length - 1
            while (left < right) {
                mid = (left + right) >> 1
                if (nums[i] > arr[mid]) {
                    left = mid + 1
                } else {
                    right = mid
                }
            }
            arr[left] = nums[i]
        }
    }
    return arr.length
};