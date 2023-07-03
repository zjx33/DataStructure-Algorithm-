var reverseVowels = function (s) {
    let l = 0, r = s.length - 1
    let v = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    s = s.split('')
    debugger
    while (l < r) {
        if (v.includes(s[l]) && v.includes(s[r])) {
            [s[l], s[r]] = [s[r], s[l]]
            l++
            r--
        }
        else if (v.includes(s[l])) {
            r--
        } else if (v.includes(s[r])) {
            l++
        } else {
            l++
            r--
        }
    }
    return s.join('')
};
reverseVowels("hello")