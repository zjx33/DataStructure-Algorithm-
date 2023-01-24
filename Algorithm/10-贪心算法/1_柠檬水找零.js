/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let fiveNum = 0
    let tenNum = 0
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            fiveNum += 1
        } else if (bills[i] === 10) {
            if (fiveNum > 0) {
                fiveNum -= 1
                tenNum += 1
            } else {
                return false
            }
        }
        else {
            if (tenNum > 0 && fiveNum > 0) {
                tenNum--
                fiveNum--
            } else if (fiveNum > 2 && tenNum < 1) {
                fiveNum -= 3
            } else {
                return false
            }
        }
    }
    return true
};