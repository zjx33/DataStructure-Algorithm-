var twoSum = function (nums, target) {
    const map = new Map()
    map.set(nums[0], 0)
    for (let i = 1; i < nums.length; i++) {
        if (map.get(target - nums[i]) !== undefined) {
            return [map.get(target - nums[i]), i]
        } else {
            map.set(nums[i], i)
        }
    }
}
console.log(twoSum([2, 7, 11, 15],9))