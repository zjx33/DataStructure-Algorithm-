var productExceptSelf = function (nums) {
    let ans = []
    let tmp = 1
    ans[0] = 1
    // 首先计算出每一个值得左侧是多少
    for (let i = 1; i <= nums.length - 1; i++) {
        ans[i] = nums[i - 1] * ans[i - 1]
    }
    // 这里有一个点就是，在i在最右侧得时候，我们上面已经算了该值最左侧乘积是多少，当i往左侧移动的时候，记录下来右侧的值相乘就好了
    for (let i = nums.length - 1; i >= 0; i--) {
        ans[i] = ans[i] * tmp
        tmp = nums[i] * tmp
    }
    return ans
};
