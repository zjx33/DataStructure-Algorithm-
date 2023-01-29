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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    if (!root) return
    let first
    let second
    const stack = []
    function dfs(root) {
        if (!root) return
        dfs(root.left)
        stack.push(root)
        dfs(root.right)
    }
    dfs(root)
    for (let i = 0; i < stack.length - 1; i++) {
        if (stack[i].val > stack[i + 1].val) {
            if (!first) {
                first = stack[i]
            }
            second = stack[i + 1]
        }
    }
    [first.val, second.val] = [second.val, first.val]
};