import { Node, LinkedList } from './linked_list.js'
class DoubleNode extends Node {
    constructor(element) {
        super(element)
        this.prev = null
    }
}
class DoubleLinkedList extends LinkedList {
    constructor() {
        super()
        this.tail = null
    }
    // append方法
    append(element) {
        const node = new DoubleNode(element)
        if (this.length === 0) {
            this.head = node
            this.tail = node
        } else {
            // 1.首先我们要先去改一下在尾部插入节点的指向
            this.tail.next = node
            node.prev = this.tail
            // 2.最后再改变tail节点的指向 
            this.tail = node
        }
        this.length++
    }
    // insert方法
    insert(position, element) {
        if (position < 0 || position > this.length) return null
        const node = new DoubleNode(element)
        if (position === 0) {
            if (this.head === null) {
                this.head = node;
                this.tail = node;
            } else {
                node.next = this.head
                this.head.prev = node
                this.head = node
            }
        }
        else if (position === this.length) {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        } else {
            let cur = this.head
            let index = 0
            while (index++ < position) {
                cur = cur.next
            }
            cur.prev.next = node
            node.prev = cur.prev
            node.next = cur
            cur.prev = node
        }
        this.length++
        return true
    }
    // romoveAt方法
    removeAt(position) {
        if (position < 0 || position > this.length - 1) return null
        if (position === 0) {
            if (this.head === null) return false
            else if (this.length === 1) {
                this.head = null
                this.tail = null
            } else {
                this.head.next.prev = null
                this.head = this.head.next
                // 还可以这样
                // this.head = this.head.next
                // this.head.prev = null
            }
        }
        else if (position = this.length - 1) {
            this.tail.prev.next = null
            this.tail = this.tail.prev
        }
        else {
            let index = 0
            let cur = this.head
            while (index++ < position) {
                cur = cur.next
            }
            cur.prev.next = cur.next
            cur.next.prev = cur.prev
        }

        this.length--
    }
}
const doulelinkedlist = new DoubleLinkedList()
doulelinkedlist.append("aaa")
doulelinkedlist.append("bbb")
doulelinkedlist.append("ccc")
doulelinkedlist.removeAt(0)

console.log(doulelinkedlist);
console.log(doulelinkedlist.head);
// doulelinkedlist.insert(0, 'eee')
// console.log(doulelinkedlist);
// doulelinkedlist.update(1, 'a')
// console.log(doulelinkedlist);