'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(node) {
    if (!this.top) {
      this.top = node;
      return;
    } else {
      node.next = this.top;
      this.top = node;
      return;
    }
  }

  pop() {
    if (!this.top) {
      return 'Stack is Empty';
    }
    let current = this.top;
    this.top = current.next;
    current.next = null;
    return current;
  }

  peek() {
    if (this.top) {
      return this.top.value;
    }
    return ('Stack is Empty');
  }
}

class PseudoQueue {
  constructor() {
    this.front = new Stack();
    this.back = new Stack();
  }
  enqueue(value) {
    this.back.push(value);
    return this.back;
  }


  dequeue() {
    while (this.back.top) {
      let current = this.back.pop();
      this.front.push(current);
    }
    let final = this.front.pop();
    while (this.front.top) {
      let current = this.front.pop();
      this.back.push(current);
    }
    return final.value;
  }
}





module.exports = {
  queue: PseudoQueue,
  node: Node
};