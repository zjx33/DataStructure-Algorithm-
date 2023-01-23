/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    // 1.暴力破解
    // return nums.map(item => item * item).sort((a, b) => a - b)
    // 2.优化
    let left = 0, right = nums.length - 1
    let arr = new Array(nums.length)
    let k = right
    while (left <= right) {
        let l = nums[left] * nums[left]
        let r = nums[right] * nums[right]
        if (l <= r) {
            arr[k] = r
            right--
        } else if (l >= r) {
            arr[k] = l
            left++
        }
        k--
    }
    return arr
};