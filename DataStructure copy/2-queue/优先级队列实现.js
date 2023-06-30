class Queue {
    constructor() {
        this.queue = []
    }
    enqueue(item) {
        this.queue.push(item)
    }
    dequeue() {
        return this.queue.shift()
    }
    front() {
        if (this.queue.length === 0) return null
        return this.queue[0]
    }
    isEmpty() {
        return this.queue.length === 0
    }
    size() {
        return this.queue.length
    }
}
class QueueElement {
    constructor(element, priority) {
        this.element = element
        this.priority = priority
    }
}
class PriorityQueue extends Queue {
    // 刚开始我是这样想的，但是这样不行
    // constructor(element, priority) {
    //     this.element = element
    //     this.priority = priority
    // }
    enqueue(element, priority) {
        const queueElement = new QueueElement(element, priority)
        if (this.isEmpty()) {
            this.queue.push(queueElement)
        } else {
            let added = false;
            for (let i = 0; i < this.queue.length; i++) {
                if (this.queue[i].priority > queueElement.priority) {
                    this.queue.splice(i, 0, queueElement)
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.queue.push(queueElement)
            }
        }
    }
}
const queue = new PriorityQueue()
queue.enqueue("aaa", 100)
queue.enqueue("bbb", 150)
queue.enqueue("ccc", 120)
queue.enqueue("ddd", 90)
queue.queue.forEach(item => {
    console.log(item.element, item.priority);
})
