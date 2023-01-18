/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let pre, cur, leftHead
    let dummy = new ListNode()
    dummy.next = head
    let p = dummy
    for (let i = 0; i < left - 1; i++) {
        p = p.next
    }
    leftHead = p
    let start = leftHead.next
    pre = start
    cur = pre.next
    for (let i = left; i < right; i++) {
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    leftHead.next = pre
    start.next = cur
    return dummy.next

};