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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    // 第一种：递归
    // let res = []
    // function inorder(root) {
    //     if (!root) return
    //     inorder(root.left)
    //     res.push(root.val)
    //     inorder(root.right)
    // }
    // inorder(root)
    // return res
    // 第二种：迭代
    let res = []
    let cur = root
    let stack = []
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        res.push(cur.val)
        cur = cur.right
    }
    return res
};