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
var largestValues = function (root) {
    let res = []
    if (!root) return res
    const stack = [root]
    while (stack.length) {
        let len = stack.length
        let max = -Infinity
        while (len--) {
            const node = stack.shift()
            max = Math.max(max, node.val)
            node.left && stack.push(node.left)
            node.right && stack.push(node.right)
        }
        res.push(max)
    }
    return res
};