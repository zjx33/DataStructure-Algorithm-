/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    // 1.粗暴解法
    //     const res = []
    //     if (!head) return null
    //     let cur = head
    //     while (cur) {
    //         res.push(cur.val)
    //         cur = cur.next
    //     }
    //     return sortedArray(res)
    // };
    // function sortedArray(nums) {
    //     if (!nums.length) return null
    //     const mid = Math.floor(nums.length / 2)
    //     const root = new TreeNode(nums[mid])
    //     root.left = sortedArray(nums.slice(0, mid))
    //     root.right = sortedArray(nums.slice(mid + 1))
    //     return root
    // 2.
    function dfs(head, tail) {
        if (head === tail) {
            return null
        }
        let slow = head
        let fast = head
        while (fast !== tail && fast.next !== tail) {
            slow = slow.next
            fast = fast.next.next
        }
        const node = new TreeNode(slow.val)
        node.left = dfs(head, slow)
        node.right = dfs(slow.next, tail)
        return node
    }
    return dfs(head, null)
};