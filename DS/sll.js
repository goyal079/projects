class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(node) {
    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }
  prepend(node) {
    if (this.head === null) {
      this.tail = node;
    } else {
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
    let currentNode = this.head;
    let dNode = this.find(val);
    while (currentNode && dNode) {
      if (currentNode.next === dNode) {
        currentNode.next = dNode.next;
        break;
      }
      currentNode = currentNode.next;
    }
  }
}

let list = new LL();
function reverse(node) {
  let revlist = new LL();
  while (currNode) {
    if (currNode == node.head) {
      node.tail = currNode;
    }
    if (currNode == node.tail) {
      node.head = currNode;
    }
    revlist.prepend(new Node(currNode.val));
    currNode = currNode.next;
  }
  return revlist;
}
list.append(new Node(4));
list.append(new Node(16));
list.prepend(new Node(84));
list.append(new Node(24));
list.append(new Node(19));
list.prepend(new Node(95));
list.append(new Node(2));
list.prepend(new Node(44));
list.prepend(new Node(66));
list.append(new Node(147));
list.append(new Node(147));
console.log(list.toArray());
list.delHead();
list.delHead();
console.log(list.toArray());
let rev = reverse(list);
console.log(list.toArray());
