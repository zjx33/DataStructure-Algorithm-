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
 * @return {boolean}
 */
var isValidBST = function (root) {
    function dfs(root, minValue, maxValue) {
        if (!root) return true
        if (root.val >= maxValue || root.val <= minValue) return false
        return dfs(root.left, minValue, root.val) && dfs(root.right, root.val, maxValue)
    }
    return dfs(root, -Infinity, Infinity)
};