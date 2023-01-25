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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let len = 0
    function dfs(root) {
        if (!root) return null
        let left = dfs(root.left)
        let right = dfs(root.right)
        len = Math.max(len, left + right)
        return Math.max(left, right) + 1
    }
    dfs(root)
    return len
};