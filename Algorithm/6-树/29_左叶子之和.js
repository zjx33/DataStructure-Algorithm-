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
var sumOfLeftLeaves = function (root) {
    let leftSum = 0
    function dfs(root) {
        if (!root) return null
        const node = root.left
        if (node && !node.left && !node.right) {
            leftSum += node.val
        }
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    return leftSum
};