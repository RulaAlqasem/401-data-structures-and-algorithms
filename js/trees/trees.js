class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }


}

class BinaryTree {
  constructor(root) {
    this.root = root
  }
  preOrder() { //root >> left >> right
    let preOrder = [];

    const _traverse = (node) => {
      preOrder.push(node.value);
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return preOrder;

  }


  inOrder() { //left root Right 
    let inOrder = [];
    const _traverse = (node) => {
      if (node.left) _traverse(node.left);
      inOrder.push(node.value);
      if (node.right) _traverse(node.right);
    }
    _traverse(this.root);
    return inOrder;
  }

  postOrder() { //left right root 
    let postOrder = [];
    const _traverse = (node) => {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      postOrder.push(node.value);
    }
    _traverse(this.root);
    return postOrder;
  }
}

class BinarySearchTree {
  constructor(root) {
    this.root = root
  }
  preOrder() { //root >> left >> right
    let preOrder = [];

    const _traverse = (node) => {
      preOrder.push(node.value);
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return preOrder;

  }


  inOrder() { //left root Right 
    let inOrder = [];
    const _traverse = (node) => {
      if (node.left) _traverse(node.left);
      inOrder.push(node.value);
      if (node.right) _traverse(node.right);
    }
    _traverse(this.root);
    return inOrder;
  }

  postOrder() { //left right root 
    let postOrder = [];
    const _traverse = (node) => {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      postOrder.push(node.value);
    }
    _traverse(this.root);
    return postOrder;
  }
  add(value) {
    var newNode = new Node(value);
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    }
    else {

      if (node.right === null)
        node.right = newNode;
      else
        this.insertNode(node.right, newNode);
    }
  }
  Contains(value) {
    let current = this.root
    while (current.value !== value && current !== null) {
      if (current.value > value) {
        current = current.left
      }
      if (current.value < value) {
        current = current.Right
      }
    }
    if (current.value === value) return true
    if (current.value !== value) return false
  }



}

module.exports = {
  Node: Node,
  BinaryTree: BinaryTree,
  BinarySearchTree: BinarySearchTree
}