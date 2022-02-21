class DLLNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(node) {
    if (this.tail === null) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
  }
  prepend(node) {
    if (this.head === null) {
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
    }
    this.head = node;
  }
  toArray() {
    let arr = [];
    let currentNode = this.head;
    while (currentNode) {
      arr.push(currentNode.val);
      currentNode = currentNode.next;
    }
    return arr;
  }
  delHead() {
    if (this.head) {
      this.head.next.prev = null;
      this.head = this.head.next;
    }
  }
  find(val) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.val === val) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
  deleteNode(val) {
    let delNode = this.find(val);
    if (delNode) {
      delNode.next.prev = delNode.prev;
      delNode.prev.next = delNode.next;
    }
  }
  reverse() {
    let currentNode = this.tail;
    while (currentNode) {
      const flag = currentNode.next;
      currentNode.next = currentNode.prev;
      currentNode.prev = flag;
      if (currentNode.next == null) {
        this.tail = currentNode;
      }
      if (currentNode.prev == null) {
        this.head = currentNode;
      }
      currentNode = currentNode.next;
    }
  }
}

let list = new DLL();
list.append(new DLLNode(4));
list.append(new DLLNode(16));
list.prepend(new DLLNode(84));
list.append(new DLLNode(24));
list.append(new DLLNode(19));
list.prepend(new DLLNode(95));
list.append(new DLLNode(2));
list.prepend(new DLLNode(44));
list.prepend(new DLLNode(66));
list.append(new DLLNode(147));
list.append(new DLLNode(147));
list.delHead();
list.delHead();
list.deleteNode(24);
console.log(list.toArray());
list.reverse();
console.log(list.toArray());
console.log("Test");
