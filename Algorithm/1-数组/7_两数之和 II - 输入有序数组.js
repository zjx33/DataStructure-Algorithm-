/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let slow = 0, fast = numbers.length - 1
    while (slow <= fast) {
        let sum = numbers[slow] + numbers[fast]
        if (sum === target) {
            return [slow + 1, fast + 1]
        } else if (sum < target) {
            slow++
        } else {
            fast--
        }
    }
};