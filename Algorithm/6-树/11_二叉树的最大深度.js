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
var maxDepth = function (root) {
    // 2.那么再想一下终止条件
    if (!root) return 0
    // 1.首先树的最大深度=左右子树深度的最大值+1
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};