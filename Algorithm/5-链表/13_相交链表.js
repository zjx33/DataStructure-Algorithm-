/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    // headA:1->2->3->4  headB:5->3->4
    // 1->2->3->4->5->3->4
    // 5->3->4->1->2->3->4
    let curA = headA
    let curB = headB
    while (curA !== curB) {
        curA = curA === null ? headB : curA.next
        curB = curB === null ? headA : curB.next
    }
    return curA
};