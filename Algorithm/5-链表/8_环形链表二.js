/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    // 第一种做标记方法
    // let cur = head
    // if (head === null || head.next === null) return null
    // while (cur && cur.next) {
    //     if (cur.tag) {
    //         return cur
    //     } else {
    //         cur.tag = "a"
    //         cur = cur.next
    //     }
    // }
    // return null
    // 第二种快慢指针
    // let pre = head
    // let cur = head
    // if (head === null || head.next === null) return null
    // while (cur && cur.next) {
    //     pre = pre.next
    //     cur = cur.next.next
    //     if (pre === cur) break
    // }
    // if (pre !== cur) return null
    // let p1 = head
    // while (p1 !== pre) {
    //     p1 = p1.next
    //     pre = pre.next
    // }
    // return p1
    if (!head) return null
    let slow = head
    let fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) {
            let cur = head
            while (cur !== slow) {
                cur = cur.next
                slow = slow.next
            }
            return cur
        }
    }
    return null
};