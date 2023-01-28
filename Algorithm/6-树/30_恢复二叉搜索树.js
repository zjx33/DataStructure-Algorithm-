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
    let first
    let second
    const arr = []
    function dfs(root) {
        if (!root) return
        dfs(root.left)
        arr.push(root)
        dfs(root.right)
    }
    dfs(root)
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].val > arr[i + 1].val) {
            if (!first) {
                first = arr[i]
            }
            second = arr[i + 1]
        }
    }
    [first.val, second.val] = [second.val, first.val]
    // let tmp=first.val
    // first.val=second.val
    // second.val=tmp
};