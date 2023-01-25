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
var rightSideView = function (root) {
    let res = []
    if (!root) return res
    let stack = [root]
    while (stack.length) {
        let len = stack.length
        while (len--) {
            const node = stack.shift()
            if (len === 0) {
                res.push(node.val)
            }
            node.left && stack.push(node.left)
            node.right && stack.push(node.right)
        }
    }
    return res
};