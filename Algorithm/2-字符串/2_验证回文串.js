/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let str = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
    // 1.
    // return str === str.split('').reverse().join('')
    // 2.
    let left = 0
    let right = str.length - 1
    while (left <= right) {
        if (str[left] !== str[right]) {
            return false
        }
        left++
        right--
    }
    return true
};