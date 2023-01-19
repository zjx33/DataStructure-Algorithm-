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
var preorderTraversal = function (root) {
    // 第一种：迭代算法
    // let res = []
    // let stack = []
    // stack.push(root)
    // if(!root) return res
    // while (stack.length) {
    //     const curr = stack.pop()
    //     res.push(curr.val)
    //     if (curr.right) {
    //         stack.push(curr.right)
    //     }
    //     if (curr.left){
    //         stack.push(curr.left)
    //     }
    // }
    // return res
    // 第二种：递归
    let res = []
    function preorder(root) {
        if (!root) return
        res.push(root.val)
        preorder(root.left)
        preorder(root.right)
    }
    preorder(root)
    return res
};