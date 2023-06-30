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
// 击鼓传花面试题
function passGame(nameList, num) {
    const queue = new Queue()
    for (let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i])
    }
    while (queue.size() > 1) {
        for (let i = 0; i < num - 1; i++) {
            queue.enqueue(queue.dequeue())
        }
        queue.dequeue()
    }
    return queue.front()
}
// console.log(passGame(['why', 'Tom', 'Lilei', 'Lucy'], 3))
const stack = []
console.log(stack.pop());