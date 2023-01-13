class Stack {
    constructor() {
        this.stack = []
    }
    push(element) {
        this.stack.push(element)
    }
    pop() {
        return this.stack.pop()
    }
    peek() {
        return this.stack[this.stack.length - 1]
    }
    isEmpty() {
        // if (!this.stack.length) {
        //     return true
        // } else {
        //     return false
        // }
        return this.stack.length === 0
    }
    size() {
        return this.stack.length
    }
}
// 十进制转二进制
function dec2bin(num) {
    // 1.创建stack
    const stack = new Stack()
    while (num > 0) {
        stack.push(num % 2)//0101
        num = Math.floor(num / 2)
    }
    // console.log(stack.stack);
    // let binString = ""
    // while (!stack.isEmpty()) {
    //     binString += stack.pop()
    // }
    // return binString
    return stack.stack.reverse().join('')
}
console.log(dec2bin(10))
