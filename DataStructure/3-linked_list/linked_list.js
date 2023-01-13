// 封装链表
class Node {
    constructor(val) {
        // 保存元素
        this.val = val;
        // 指向下一个节点，刚开始我们不知道指向谁，所以先置为null，后面再赋值
        this.next = null
    }
}
class LinkedList {
    constructor() {
        // 刚开始得时候让他为null，然后后面再赋值
        this.head = null;
        this.length = 0;
    }
    // append方法
    append(element) {
        let cur = this.head
        const node = new Node(element)
        if (!this.head) {
            this.head = node;
        }
        else {
            while (cur.next) {
                cur = cur.next;
            }
            cur.next = node
        }
        this.length++

    }
    // insert方法
    insert(position, element) {
        const node = new Node(element)
        if (position < 0 || position > this.length) {
            return false;
        }
        else {
            if (position === 0) {
                node.next = this.head
                this.head = node
            }
            else {
                let cur = this.head
                let pre = null
                console.log(",,,,", this.head);
                let index = 0
                while (index++ < position) {
                    pre = cur
                    cur = cur.next;
                }
                pre.next = node
                node.next = cur
            }
        }
        this.length++
        //         本来链表是以下这样得aaa bbb ccc ddd,现在我想将eee插入到第三个位置，那就应该是aaa bbb ccc eee ddd.那么到index=2得时候，跳出循环。本来将eee插入到第三个位置应该是pre=ccc,cur=ddd,但是这里我感觉好像不是，但是输出这个链表又是对的，我不知道我哪错了
        // index=0 pre=head cur=aaa
        // index=1 pre =aaa cur=bbb
        // index=2 pre =bbb cur=ccc
        // 我懂这里了，我搞错的是这里得this.head指向的是aaa第一个节点，而不是null，为什么呢？
        // 我忽略了一个问题，就是在我们给这个链表添加元素得时候，我们在再第一次添加的时候，是直接这样得this.head = node，那这个时候head就已经指向第一个节点了。到后面我们继续添加其他节点得时候，我们是用了一个cur来做，那就没有去用到head了，所以head一直都是指向第一个节点的，那么这里就应该是这样
        // index = 0 pre = head(aaa) cur = bbb
        // index = 1 pre = bbb cur = ccc
        // index = 2 pre = ccc cur = ddd

    }
    // get方法
    get(position) {
        if (position < 0 || position > this.length - 1) {
            return false
        }
        else {
            let index = 0
            let cur = this.head
            while (index++ < position) {
                cur = cur.next
            }
            return cur.element//这里cur有element是因为this.head也有，因为前面在添加第一个元素时，我们做过这样的一个操作，this.head=node，那这个时候就把node得数据域element和指针域next都给了head
        }
    }
    // indexOf方法
    indexOf(element) {
        let index = 0
        let cur = this.head
        while (index < this.length) {
            if (cur.element === element) {
                return index
            }
            else {
                cur = cur.next
            }
            index++
        }
        return -1
    }
    // update方法
    update(position, element) {
        if (position < 0 || position > this.length) return false
        let index = 0
        let cur = this.head
        while (index++ < position) {
            cur = cur.next//bbb
        }
        cur.element = element
    }
    // removeAt方法
    removeAt(position) {
        if (position < 0 || position > this.length) return null
        let index = 0
        let pre = null
        let cur = this.head
        if (position === 0) {
            this.head = cur.next
        }
        else {
            while (index++ < position) {
                pre = cur//aaa
                cur = cur.next//bbb
            }
            pre.next = cur.next
        }
        this.length--
    }
    // remove方法
    remove(element) {
        const index = this.indexOf(element)
        if (index === -1) return
        this.removeAt(index)
    }
}
// const linkedlist = new LinkedList()
// linkedlist.append("aaa")
// linkedlist.append("bbb")
// linkedlist.append("ccc")
// linkedlist.append("ddd")
// console.log(linkedlist);
// linkedlist.insert(3, "eee")
// console.log(linkedlist);
// console.log(linkedlist.get(3))
// console.log(linkedlist.indexOf('aaa'));
// console.log(linkedlist.indexOf('aa'));
// linkedlist.update(1, 'www')
// console.log(linkedlist);
// linkedlist.removeAt(0)
// console.log(linkedlist);
const l1=new LinkedList()
l1.append(1)
l1.append(2)
l1.append(3)
var reverseList = function (head) {
    let pre = new Node()
    debugger
    console.log(pre)
    let cur = head
    // let pre = null
    pre.next = head
    debugger
    console.log(pre);
    while (cur) {
        debugger
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
};
console.log(reverseList(l1.head))

nums=[1,2,3]
visited:{
1:true
2:true
3:true
}
curr=[1,2,3]
res=[1,2,3]
curr=[1,2]
visited: {
    1: true
    2: true
    3: 0
}
curr=[1]
visited: {
    1: true
    2: 0
    3: 0//true
}
curr=[1,3]