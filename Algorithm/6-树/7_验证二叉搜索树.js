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
    // function dfs(root, minValue, maxValue) {
    //     if (!root) return true
    //     if (root.val >= maxValue || root.val <= minValue) return false
    //     return dfs(root.left, minValue, root.val) && dfs(root.right, root.val, maxValue)
    // }
    // return dfs(root, -Infinity, Infinity)
    let prev = -Infinity
    function dfs(root) {
        if (!root) return true
        let left = dfs(root.left)
        if (root.val <= prev) return false
        prev = root.val
        let right = dfs(root.right)
        return left && right
    }
    return dfs(root)
};