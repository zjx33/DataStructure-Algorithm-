var reverseWords = function (s) {
    //    1.首先定义两个变量，为了去除前导空格
    let l = 0, r = s.length - 1
    let word = ''
    let array = []
    while (s[l] === " ") {
        l++
    } while (s[r] === " ") {
        r--
    }
    while (l <= r) {
        if (s[l] === ' ' && word) {
            array.unshift(word)
            word = ''
        }
        // else if的条件判断里面不能直接写s[l] ,我一开始认为‘ ’是false，所以如果这样写就不会执行，但是‘ ’是空格字符，会判断为true,‘’会判读为false
        else if (s[l] !== ' ') {
            word += s[l]
        }
        l++
    }
    array.unshift(word)
    return array.join(' ')
};
reverseWords('hello    world')