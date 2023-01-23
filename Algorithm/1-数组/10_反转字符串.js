/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    // return s.reverse()
    // 上面这种方法比较取巧
    let slow = 0, fast = s.length - 1
    while (slow <= fast) {
        [s[slow], s[fast]] = [s[fast], s[slow]]
        slow++
        fast--
    }
    return s
};