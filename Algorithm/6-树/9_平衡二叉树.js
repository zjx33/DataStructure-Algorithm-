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
var isBalanced = function (root) {
    let flag = true
    function dfs(root) {
        if (!root || !flag) return 0
        const left = dfs(root.left)
        const right = dfs(root.right)
        if (Math.abs(left - right) > 1) {
            flag = false
            return 0
        }
        return Math.max(left, right) + 1
    }
    dfs(root)
    return flag
    // return dfs(root) !== -1

};