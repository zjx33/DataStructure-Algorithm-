/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    // if (p === null && q === null) return true
    // if (p === null || q === null) return false
    // // if (p.val !== q.val) return false
    // // return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    // // 我更喜欢下面这种，思路是一样的只是写法不同
    // let left = isSameTree(p.left, q.left)
    // let right = isSameTree(p.right, q.right)
    // if (left && right && p.val === q.val) {
    //     return true
    // }
    // return false
    // 迭代写法
    if (p === null && q === null) return true
    if (p === null || q === null) return false
    const stackP = [p]
    const stackQ = [q]
    while (stackP.length && stackQ.length) {
        const nodeP = stackP.pop()
        const nodeQ = stackQ.pop()
        if (nodeP.val !== nodeQ.val) {
            return false
        }
        if (nodeP.left && nodeQ.left) {
            stackP.push(nodeP.left)
            stackQ.push(nodeQ.left)
        } else if (nodeP.left || nodeQ.left) {
            return false
        }
        if (nodeP.right && nodeQ.right) {
            stackP.push(nodeP.right)
            stackQ.push(nodeQ.right)
        } else if (nodeP.right || nodeQ.right) {
            return false
        }
    }
    return true
};