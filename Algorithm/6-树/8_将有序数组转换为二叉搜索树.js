/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    if (!nums.length) return null
    function buildBST(low, high) {
        if (low > high) return null
        const mid = Math.floor(low + (high - low) / 2)
        const cur = new TreeNode(nums[mid])//-10
        cur.left = buildBST(low, mid - 1)//0,1 
        cur.right = buildBST(mid + 1, high)
        return cur
    }
    return buildBST(0, nums.length - 1)
};