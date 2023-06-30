var lengthOfLongestSubstring = function (s) {
    //定义左指针，右指针
    let l = 0
    let res = 0
    let map = new Map()
    for (let r = 0; r < s.length; r++) {
        if (map.has(s[r]) && l <= map.get(s[r])) {
            l = map.get(s[r]) + 1

        }
        map.set(s[r], r)
        res = Math.max(res, r - l + 1)

    }
    return res
};