/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    let res = []
    if (!root) return res
    let stack = [root]
    while (stack.length) {
        let sum = 0
        let length = stack.length
        let cur = length
        while (length--) {
            const node = stack.shift()
            sum += node.val
            node.left && stack.push(node.left)
            node.right && stack.push(node.right)
        }
        sum = sum / cur
        res.push(sum)
    }
    return res
};