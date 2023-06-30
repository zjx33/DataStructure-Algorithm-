var mergeAlternately = function (word1, word2) {
    let l1 = 0, l2 = 0
    const m = word1.length, n = word2.length
    let res = ''
    while (l1 < m || l2 < n) {
        if (l1 < m) {
            res += word1[l1]; l1++
        }
        if (l2 < n) {
            res += word2[l2]; l2++
        }
    }
    return res
};