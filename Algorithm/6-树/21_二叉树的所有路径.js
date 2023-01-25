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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    if (!root) return 0
    let res = []
    function dfs(root, path) {
        if (!root) return null
        if (root.left === null && root.right === null) {
            res.push(path + root.val)
        }
        path += root.val + '->'
        dfs(root.left, path)
        dfs(root.right, path)
    }
    dfs(root, '')
    return res
};