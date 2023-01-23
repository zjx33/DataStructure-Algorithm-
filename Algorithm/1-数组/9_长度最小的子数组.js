/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let slow = 0, fast = 0, sum = 0
    let result = nums.length + 1
    while (fast < nums.length) {
        sum += nums[fast++]
        while (sum >= target) {
            let sublen = fast - slow
            result = (result > sublen) ? sublen : result
            sum -= nums[slow++]
        }
    }
    return result > nums.length ? 0 : result
};