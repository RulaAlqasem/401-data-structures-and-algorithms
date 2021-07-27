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
  /****************************************/
  /*******//////////////////////**********/
  /******///code challenge 16///**********/
  /******//////////////////////*********/
  /************************************/

  maximumValue() {
    let arr = this.postOrder()
    let maximumValue = arr[0]
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] > maximumValue) {
        maximumValue = arr[index]
      }
    }
    return maximumValue
  }

  /************************************/
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

    let newNode = new Node(value);
    let insertNode = (node, newNode) => {
      if (newNode.value < node.value) {
        if (node.left === null) node.left = newNode;
        else insertNode(node.left, newNode);
      }
      else {

        if (node.right === null)
          node.right = newNode;
        else
          insertNode(node.right, newNode);
      }
    }
    if (!this.root) this.root = newNode;
    else insertNode(this.root, newNode);


  }

  Contains(value) {
    if (!this.root) return false;

    let current = this.root;
    let contains = false;
    while (current && !contains) {
      if (value < current.value) {
        current = current.left;
      }

      else if (value > current.value) {
        current = current.right;

      } else {
        contains = true;
      }
    }

    if (!contains) {

      return false;
    }

    return contains;
  }

}
/****************************************/
/*******//////////////////////**********/
/******///code challenge 17///**********/
/******//////////////////////*********/
/************************************/
treeBreadthBirst = (tree) => {
  let tbb = [],
    queue = [],
    current = tree.root;

  queue.push(current);
  while (queue.length) {
    current = queue.shift();
    tbb.push(current.value);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  };

  return tbb;
}
/************************************/


/****************************************/
/*******//////////////////////**********/
/******///code challenge 18///**********/
/******//////////////////////*********/
/************************************/
fizzBuzz = (tree) => {
  if (!tree.root) return false;
  let newTree = tree

  let fizz = 'Fizz';
  let buzz = 'Buzz';
  let fizzbuzz = 'FizzBuzz'
  let current = newTree.root
  let queue = []
  queue.push(current);
  while (queue.length) {
    current = queue.shift();
    if ((current.value % 5 && current !== null) === 0 && (current.value % 3) === 0) current.value = fizzbuzz
    else if ((current.value % 3) === 0 && current !== null) current.value = fizz
    else if ((current.value % 5 && current !== null) === 0) current.value = buzz

    else if ((current.value % 5 && current !== null) !== 0 && (current.value % 3) !== 0) current.value = `${current.value}`

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  };
  console.log(newTree);
  return newTree;
}
/************************************/

module.exports = {
  Node: Node,
  BinaryTree: BinaryTree,
  BinarySearchTree: BinarySearchTree,
  treeBreadthBirst: treeBreadthBirst,
  fizzBuzz: fizzBuzz
}