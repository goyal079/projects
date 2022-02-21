class Queue {
  constructor() {
    this.arr = [];
  }
  enqueue() {
    this.arr.push(ele);
    return ele;
  }
  dequeue() {
    return this.arr.shift();
  }
  peek() {
    return this.arr[0];
  }
  isEmpty() {
    if (this.arr.length === 0) {
      return true;
    } else return false;
  }
  toArray() {
    return [...this.arr];
  }
}
let n = new Queue();
