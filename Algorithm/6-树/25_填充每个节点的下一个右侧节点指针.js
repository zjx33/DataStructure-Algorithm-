/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (!root) return null
    let stack = [root]
    while (stack.length) {
        let len = stack.length
        while (len--) {
            const node = stack.shift()
            node.next = len > 0 ? stack[0] : null
            node.left && stack.push(node.left)
            node.right && stack.push(node.right)
        }
    }
    return root
};