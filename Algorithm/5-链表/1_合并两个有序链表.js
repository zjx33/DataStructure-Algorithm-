/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let head = new ListNode()
    let cur = head
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            cur.next = l1
            l1 = l1.next
        } else {
            cur.next = l2
            l2 = l2.next
        }
        cur = cur.next
    }
    if (l2 !== null) {
        cur.next = l2
    }
    if (l1 !== null) {
        cur.next = l1
    }
    return head.next
};