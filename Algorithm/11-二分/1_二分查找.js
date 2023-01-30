/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        // const mid = (left + right) >> 1 那么这种可能会存在越界的问题，以下这种会好一点
        const mid = left + ((right - left) >> 1)
        if (target > nums[mid]) {
            left = mid + 1
        } else if (target < nums[mid]) {
            right = mid - 1
        } else {
            return mid
        }
    }
    return - 1
};