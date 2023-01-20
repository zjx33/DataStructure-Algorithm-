/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const row = board.length
    const col = board[0].length
    if (board.length === 0) {
        return false
    }
    if (word.length === 0) {
        return true
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            const ret = find(i, j, 0)
            if (ret) {
                return true
            }
        }
    }
    return false
    function find(i, j, cur) {
        if (i < 0 || i >= row || j < 0 || j >= col) {
            return false
        }
        let tmp = board[i][j]
        if (tmp === word[cur] && cur === word.length - 1) {
            return true
        }
        if (tmp !== word[cur]) {
            return false
        }
        board[i][j] = null
        const ret = find(i + 1, j, cur + 1) || find(i - 1, j, cur + 1) || find(i, j + 1, cur + 1) || find(i, j - 1, cur + 1)
        board[i][j] = tmp
        return ret
    }
};