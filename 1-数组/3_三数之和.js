/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = []
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1;//左指针
        let k = nums.length - 1;//右指针
        if (nums[i] > 0) break
        if (i > 0 && nums[i] === nums[i - 1]) continue
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]
            if (sum < 0) {
                j++
                while (j < k && nums[j] === nums[j - 1]) {
                    j++
                }
            }
            else if (sum > 0) {
                k--
                while (j < k && nums[k] === nums[k + 1]) {
                    k--
                }
            }
            else {
                res.push([nums[i], nums[j], nums[k]])
                j++
                k--
                while (j < k && nums[j] === nums[j - 1]) {
                    j++
                }
                while (j < k && nums[k] === nums[k + 1]) {
                    k--
                }
            }
        }
    }
    return res
};
