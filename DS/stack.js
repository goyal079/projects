class Stack {
  constructor() {
    this.arr = [];
  }
  push(ele) {
    this.arr.unshift(ele);
    return ele;
  }
  pop() {
    return this.arr.shift();
  }
  peek() {
    return this.arr[0];
  }
  toArray() {
    return [...this.arr];
  }
  isEmpty() {
    if (this.arr.length === 0) {
      return true;
    }
    return false;
  }
}

let n = new Stack();
n.push(10);
n.push(15);
n.push(24);
n.push(11);
console.log(n.pop());
