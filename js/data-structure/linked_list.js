'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;

  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    if (!value) {
      throw new Error('NO THING');
    }
    this.head = new Node(value, this.head);
  }

  includes(value) {
    let current = this.head;
    if (!value) {
      throw new Error('Improper value passed as argument');
    }
    if (!current) {
      throw new Error('Linked List invalid');
    }
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    if (!current) {
      throw new Error('Linked List invalid');
    }
    let finalStr = '';
    while (current) {
      finalStr += `{ ${current.value} } -> `;
      current = current.next;
    }
    return finalStr += 'NULL';
  }
  append(value) {
    let current = this.head;
    if (!current) {
      this.head = new Node(value);
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    }
  }
  insertBefore(value, targetValue) {
    let current = this.head;
    if (current.value === targetValue) {
      this.insert(value);
    } else {
      while (current.next.value !== targetValue) {
        current = current.next;
      }
      let temp = new Node(value);
      temp.next = current.next;
      current.next = temp;
    }
  }
  insertAfter(value, targetValue) {
    let current = this.head;
    while (current.value !== targetValue) {
      current = current.next;
    }
    let temp = new Node(value);
    temp.next = current.next;
    current.next = temp;
  }
}


module.exports = {
  ll: LinkedList,
  node: Node
};
