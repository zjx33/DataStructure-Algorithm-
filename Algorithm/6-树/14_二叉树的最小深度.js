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
var minDepth = function (root) {
    // 1.递归
    // if (!root) return 0
    // if (!root.left && !root.right) return 1
    // if (!root.left) return 1 + minDepth(root.right)
    // if (!root.right) return 1 + minDepth(root.left)
    // if (root.left && root.right) {
    //     return Math.min(minDepth(root.left), minDepth(root.right)) + 1
    // }
    // 2.迭代
    if (!root) return null
    const stack = [root]
    let dep = 0
    while (true) {
        // 以下两行这里是很巧妙的
        dep++
        let size = stack.length
        while (size--) {
            const node = stack.shift()
            if (!node.left && !node.right) return dep
            node.left && stack.push(node.left)
            node.right && stack.push(node.right)
        }

    }
};