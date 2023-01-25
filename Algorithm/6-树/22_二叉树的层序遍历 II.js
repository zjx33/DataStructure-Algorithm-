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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    let res = []
    if (!root) return res
    let stack = [root]
    while (stack.length) {
        let len = stack.length
        const cur = []
        while (len--) {
            const node = stack.shift()
            cur.push(node.val)
            node.left && stack.push(node.left)
            node.right && stack.push(node.right)
        }
        res.unshift(cur)
    }
    return res
};