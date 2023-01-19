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
 * @return {TreeNode}
 */
var balanceBST = function (root) {
    // 1.首先根据中序遍历拿到这个二叉搜索树的有序数组
    const res = []
    function inorder(root) {
        if (!root) return
        inorder(root.left)
        res.push(root.val)
        inorder(root.right)
    }
    function buildAVL(low, high) {
        if (low > high) return null
        const mid = Math.floor(low + (high - low) / 2)
        const root = new TreeNode(res[mid])
        root.left = buildAVL(low, mid - 1)
        root.right = buildAVL(mid + 1, high)
        return root
    }
    inorder(root)
    return buildAVL(0, res.length - 1)
};