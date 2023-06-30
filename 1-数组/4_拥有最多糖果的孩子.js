var kidsWithCandies = function (candies, extraCandies) {
    let res = 0
    res = Math.max(...candies)//这里需要使用剩余参数将数组展开，详情可以去看一下Math.max的用法
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= res) {
            candies[i] = true
        } else {
            candies[i] = false
        }
    }
    return candies
};