/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let res = []
    if (!root) return res
    let stack = [root]
    while (stack.length) {
        const cur = []
        let len = stack.length
        while (len--) {
            const node = stack.shift()
            cur.push(node.val)
            node.children.forEach(item => {
                item && stack.push(item)
            })
        }
        res.push(cur)
    }
    return res
};