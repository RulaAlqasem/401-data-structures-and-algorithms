'use strict';

const treeMaster = require('../trees/trees');
const Tree = treeMaster.BinaryTree;
const Node = treeMaster.Node;



const treeIntersection = (treeOne, treeTwo) => {
  let hash = {};
  const preOrder = (tree) => {
    let array = [];
    const preOrderHelper = (node) => {
      if (hash[node.value]) {
        array.push(node.value);
      } else {
        hash[node.value] = node.value;
      }
      if (node.left) {
        preOrderHelper(node.left);
      }
      if (node.right) {
        preOrderHelper(node.right);
      }
    };
    let current = tree.root;
    preOrderHelper(current);
    return array;
  };
  preOrder(treeOne);
  return preOrder(treeTwo);
};

module.exports = {
  tree: Tree,
  node: Node,
  treeIntersection: treeIntersection,
};