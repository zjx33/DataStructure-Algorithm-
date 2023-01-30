/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    // return s.split(' ').filter(v => v).reverse().join(' ')
    let left = 0
    let right = s.length - 1
    let word = ''
    const queue = []
    while (s.charAt(left) === " ") {
        left++
    }
    while (s.charAt(right) === " ") {
        right--
    }
    while (left <= right) {
        const ch = s.charAt(left)
        if (ch === " " && word) {
            queue.unshift(word)
            word = ''
        } else if (ch !== " ") {
            word += ch
        }
        left++
    }
    queue.unshift(word)
    return queue.join(' ')
};