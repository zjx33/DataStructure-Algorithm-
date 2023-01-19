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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let queue = []
    let res = []
    if (!root) return res
    queue.push(root)
    while (queue.length) {
        let len = queue.length
        let level = []
        for (let i = 0; i < len; i++) {
            let cur = queue.shift()
            level.push(cur.val)
            if (cur.left) { queue.push(cur.left) }
            if (cur.right) { queue.push(cur.right) }

        }
        res.push(level)
    }
    return res
};