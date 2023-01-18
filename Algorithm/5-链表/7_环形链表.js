/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    // 第一种解法：定标记
    // let cur=head
    // if(head===null||head.next===null) return false
    // while(cur.next){
    //     if(cur.tag){
    //     return true
    // }else{
    //     cur.tag="a"
    //     cur=cur.next
    // }
    // }
    // return false
    // 第二种解法：快慢指针
    let slow = head
    let fast = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) {
            return true
        }
    }
    return false
    //第三种： 这一种解法跟第一种是类似的，不过它使用了一个数据结构set
    //     let set = new Set()
    //     while (head) {
    //         if (set.has(head)) {
    //             return true
    //         } else {
    //             set.add(head)
    //             head = head.next
    //         }
    //     }
    //     return false
};