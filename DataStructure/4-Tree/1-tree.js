class Node {
    constructor(data) {
        this.data = data;
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    // insert方法
    insert(key) {
        // 1.根据key创建Node节点
        const newNode = new Node(key)
        // 2.如果原来的树是一颗空树
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    // 这里写一个递归的方法 ，在树里面就会超级方便,这个node表示往哪插，与谁比较，newNode表示插入哪一个
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }
    // preOrderTraverse先序遍历方法
    preOrderTraverse() {
        this.preOrderTraverseNode(this.root)
    }
    // 先序遍历需要的递归方法
    preOrderTraverseNode(node) {
        if (node === null) return
        console.log(node.data);
        this.preOrderTraverseNode(node.left)
        this.preOrderTraverseNode(node.right)
    }
    // min方法
    min() {
        let node = this.root
        while (node.left) {
            node = node.left
        }
        return node.data
    }
    // max方法
    max() {
        let node = this.root
        while (node.right) {
            node = node.right
        }
        return node.data
    }
    // 一般所有的递归都是可以跟循环相互转化的
    // search1递归方法
    search1(key) {
        return this.searchNode(this.root, key)
    }
    searchNode(node, key) {
        if (node === null) return false
        if (node.data > key) {
            node = node.left
            return this.searchNode(node, key)
        } else if (node.data < key) {
            return this.searchNode(node.right, key)
        } else {
            return true
        }

    }
    // search2循环搜索
    search2(key) {
        let node = this.root
        if (node === null) return false
        while (node) {
            if (node.data > key) {
                node = node.left
            } else if (node.data < key) {
                node = node.right
            } else {
                return true
            }
        }
        return false
    }
    // remove删除节点
    remove(key) {
        // 1.定义一些变量记录状态
        let node = this.root
        let parent = null
        let isLeftChild = true
        // 2.开始查找要删除的节点
        while (key !== node.data) {
            parent = node
            if (key < node.data) {
                isLeftChild = true
                node = node.left
            } else if (key > node.data) {
                isLeftChild = false
                node = node.right
            }
            if (node === null) return false
        }
        // 3.找到节点 node
        // 情况一：删除的节点是叶子节点（没有子节点）
        if (node.left === null && node.right === null) {
            if (node === this.root) this.root === null
            else if (isLeftChild === true) parent.left = null
            else parent.right = null

        }
        // 情况二：删除的节点有一个子节点
        else if (node.right === null) {
            if (node === this.root) this.root = node.left
            else if (isLeftChild) {
                parent.left = node.left
            } else {
                parent.right = node.left
            }
        } else if (node.left === null) {
            if (node === this.root) this.root = node.right
            else if (isLeftChild) {
                parent.left = node.right
            } else {
                parent.right = node.right
            }
        }
        // 情况三：删除的节点有两个子节点

        return true
    }
    // 找到要删除节点的前驱或者后继,delNode为要删除的那个节点
    getSuccessor(delNode) {
        let successParent = delNode;//定义前驱后继节点的父节点
        let successer=delNode.right//定义找的后继节点

    }
}
const bst = new BinarySearchTree()
bst.insert(11)
bst.insert(7)
// bst.insert(15)
// bst.insert(5)
// bst.insert(3)
// bst.insert(9)
// bst.insert(8)
// bst.insert(10)
// bst.insert(13)
// console.log(bst);
// console.log(bst.root);
console.log(bst.max());
console.log(bst.search2(11));
