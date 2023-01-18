/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    // 第一种：递归
    // if (head === null) return head
    // head.next = removeElements(head.next, val)
    // return head.val === val ? head.next : head
    // 第二种：
    let p = new ListNode()
    p.next = head
    let cur = p
    while (cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return p.next
};