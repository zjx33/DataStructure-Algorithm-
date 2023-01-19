/**
* @param {number[]} nums
* @param {number} k
* @return {number}
*/
const findKthLargest = function (nums, k) {
    // 定义一个堆
    const heap = []
    let n = 0
    const len = nums.length
    function createHeap() {
        for (let i = 0; i < k; i++) {
            insert(nums[i])
        }
    }
    function updateHeap() {
        for (let i = k; i < len; i++) {
            if (nums[i] > heap[0]) {
                heap[0] = nums[i]
                downHeap(0, k)
            }
        }
    }
    function downHeap(low, high) {
        let i = low
        let j = 2 * low + 1
        while (j < high && j + 1 < high) {
            if (heap[j] > heap[j + 1]) {
                j++
            }
        }
        if (heap[low] > heap[j]) {
            let temp = heap[low]
            heap[j] = temp
            heap[low] = heap[j]
        }
        i = j
        j = Math.floor(2 * low + 1)
    }
    function upHeap(low, high) {
        let i = high
        let j = Math.floor(i - 1 / 2)
        while (j >= low) {
            if (heap[j] > heap[i]) {
                const temp = heap[i]
                heap[j] = temp
                heap[i] = heap[j]
                i = j
                j = Math.floor(i - 1 / 2)
            }
            else {
                break
            }
        }
    }
    function insert(x) {
        heap[n] = x
        upHeap(0, n)
        n++
    }
    createHeap()
    updateHeap()
    return heap[0]
}