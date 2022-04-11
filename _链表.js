// /** 
//  * 对比两个对象的值是否相等
//  * @param {Object} obj1
//  * @param {Object} obj2
//  * @return {Boolean}
//  */
// function isEqual(obj1, obj2) {
//     if (obj1 === obj2) {
//         return true;
//     }
//     if (obj1 == null || obj2 == null) {
//         return false;
//     }
//     if (typeof obj1 != "object" || typeof obj2 != "object") {
//         return false;
//     }
//     var keys1 = Object.keys(obj1);
//     var keys2 = Object.keys(obj2);
//     if (keys1.length != keys2.length) {
//         return false;
//     }
//     for (var i = 0; i < keys1.length; i++) {
//         var key = keys1[i];
//         if (obj1[key] != obj2[key]) {
//             return false;
//         }
//     }
//     return true;
// }

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    /**
     * 向链表头部添加元素
     * @param {*} element
     * @returns {number}
     * @memberof LinkedList
     * @example 
     **/
     prepend(element) {
        let node = new Node(element);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this.length;
    }
    /**
     * 向链表尾部添加元素
     * @param {*} element
     * @returns {number}
     * @memberof LinkedList
     * @example
     **/
    append(element) {
        let node = new Node(element);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this.length;
    }
    /**
     * 在链表中插入指定元素
     * @param {*} element
     * @param {number} index
     * @returns {boolean}
     * @memberof LinkedList
     **/
    insert(element, index) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === 0) {
            return this.prepend(element);
        }
        if (index === this.length) {
            return this.append(element);
        }
        let node = new Node(element);
        let current = this.head;
        let previous;
        let i = 0;
        while (i < index) {
            previous = current;
            current = current.next;
            i++;
        }
        previous.next = node;
        node.next = current;
        this.length++;
        return true;
    }
    /**
     * 在链表中查找指定元素
     * @param {*} element
     * @returns {boolean}
     * @memberof LinkedList
     **/
    find(element) {
        let currentNode = this.head;
        while (currentNode !== null && currentNode.element !== element) {
            currentNode = currentNode.next;
        }
        return currentNode !== null;
    }
    /**
     * 在链表中查找指定元素的索引
     * @param {*} element
     * @returns {number}
     * @memberof LinkedList
     **/
    indexOf(element) {
        console.log(element);
        let currentNode = this.head;
        console.log(currentNode);
        let index = 0;
        while (currentNode !== null && !_.isEqual(currentNode.element, element)) {
            currentNode = currentNode.next;
            index++;
        }
        return currentNode !== null ? index : -1;
    }
    /**
     * 删除链表中指定元素
     * @param {*} element
     * @returns {boolean}
     * @memberof LinkedList
     **/
    remove(element) {
        let currentNode = this.head;
        let previousNode;
        if (currentNode !== null && _.isEqual(currentNode.element, element)) {
            this.head = currentNode.next;
        } else {
            while (currentNode !== null && !_.isEqual(currentNode.element, element)) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            if (currentNode === null) {
                return false;
            }
            previousNode.next = currentNode.next;
        }
        this.length--;
        return true;
    }
    /**
     * 删除链表中指定索引的元素
     * @param {number} index
     * @returns {boolean}
     * @memberof LinkedList
     **/
    removeAt(index) {
        if (index > -1 && index < this.length) {
            let currentNode = this.head;
            let previousNode;
            let indexCount = 0;
            if (index === 0) {
                this.head = currentNode.next;
            } else {
                while (indexCount < index) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                    indexCount++;
                }
                previousNode.next = currentNode.next;
            }
            this.length--;
            return true;
        }
        return false;
    }
    /**
     * 清空链表
     * @memberof LinkedList
     **/
    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    /**
     * 获取链表中指定索引的元素
     * @param {number} index
     * @returns {*}
     * @memberof LinkedList
     **/
    get(index) {
        if (index > -1 && index < this.length) {
            let currentNode = this.head;
            let indexCount = 0;
            while (indexCount < index) {
                currentNode = currentNode.next;
                indexCount++;
            }
            return currentNode.element;
        }
    }
    /**
     * 获取链表中指定元素的前一个元素
     * @param {*} element
     * @returns {*}
     * @memberof LinkedList
     **/    
    getPrevious(element) {
        let currentNode = this.head;
        while (currentNode && currentNode.next && !_.isEqual(currentNode.next.element, element)) {
            currentNode = currentNode.next;
        }
        return currentNode !== null ? currentNode.element : null;
    }
    /**
     * 获取链表中指定元素的后一个元素
     * @param {*} element
     * @returns {*}
     * @memberof LinkedList
     **/
    getNext(element) {
        let currentNode = this.head;
        while (currentNode && currentNode?.next && !_.isEqual(currentNode.element, element)) {
            currentNode = currentNode.next;
        }
        return currentNode !== null ? currentNode.next.element : null;
    }
    /**
     * 获取链表中指定索引的前一个元素
     * @param {number} index
     * @returns {*}
     * @memberof LinkedList
     **/
    getIndexPrevious(index) {
        if (index > -1 && index < this.length) {
            let currentNode = this.head;
            let indexCount = 0;
            while (indexCount < index) {
                currentNode = currentNode.next;
                indexCount++;
            }
            return currentNode.element;
        }
    }
    /**
     * 获取链表中指定索引的后一个元素
     * @param {number} index
     * @returns {*}
     * @memberof LinkedList
     **/
    getIndexNext(index) {
        if (index > -1 && index < this.length) {
            let currentNode = this.head;
            let indexCount = 0;
            while (indexCount < index) {
                currentNode = currentNode.next;
                indexCount++;
            }
            return currentNode.next.element;
        }
    }
    /**
     * 获取链表长度
     * @returns {number}
     * @memberof LinkedList
     * @readonly
     **/
    size() {
        return this.length;
    }
}

const list = new LinkedList();

list.append({ id: 1, name: '张三', age: 18 }); // 2
list.append({ id: 2, name: '李四', age: 20 }); // 3
list.insert({ id: 3, name: '王五', age: 22 }, 0); // 1
list.prepend({ id: 4, name: '赵六', age: 24 }); // 0
list.append({ id: 5, name: '孙七', age: 26 }); // 4
list.insert([111], 2);
console.log(list);

// 获取指定元素下标的下一个元素
// console.log(list.getIndexNext(0));

// console.log(list.getNext({ id: 1, name: '张三', age: 18 }));
// console.log(list.getPrevious({ id: 5, name: '孙七', age: 26 }));
console.log(list.indexOf({ id: 5, name: '孙七', age: 26 }));
console.log(list.remove([111]));
console.log(list);

// 链表长度
// console.log(list.size());
