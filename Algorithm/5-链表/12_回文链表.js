/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    // 这个题的思路就是，因为是回文，所以我们直接先把前半段反转一下，再去比较
    // 这里我刚开始想的是如何判断前半段是哪一段，那这个时候就用到快慢指针
    let pre = null
    let slow = head
    let fast = head
    while (fast && fast.next) {
        fast = fast.next.next
        let tmp = slow.next
        slow.next = pre
        pre = slow
        slow = tmp
    }
    //如果只有一个中间节点，那么这个时候fast是指向最后一个值得，这个时候slow需要往前移一个，具体情况可以举一个例子
    if (fast) {
        slow = slow.next
    }
    while (slow && pre) {
        if (slow.val !== pre.val) {
            return false
        }
        slow = slow.next
        pre = pre.next
    }
    return true
};