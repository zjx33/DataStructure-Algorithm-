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
var flatten = function (root) {
    const list = []
    preTravese(root, list)
    for (let i = 1; i < list.length; i++) {
        list[i - 1].left = null
        list[i - 1].right = list[i]
    }
};
function preTravese(root, list) {
    if (!root) return 0
    list.push(root)
    preTravese(root.left, list)
    preTravese(root.right, list)
}