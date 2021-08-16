'use strict';

const treeMaster = require('./hashmap-tree-intersection');
const Tree = treeMaster.tree;
const Node = treeMaster.node;
const treeIntersection = treeMaster.treeIntersection;


describe('Testing treeIntersection function', () => {
  it('Should an array of values that are matching between the two trees', () => {
    let treeOne = new Tree();
    treeOne.root = new Node(150);
    treeOne.root.left = new Node(100);
    treeOne.root.left.left = new Node(75);
    treeOne.root.left.right = new Node(160);
    treeOne.root.left.right.left = new Node(125);
    treeOne.root.left.right.right = new Node(175);
    treeOne.root.right = new Node(250);
    treeOne.root.right.left = new Node(200);
    treeOne.root.right.right = new Node(350);
    treeOne.root.right.right.left = new Node(300);
    treeOne.root.right.right.right = new Node(500);

    let treeTwo = new Tree();
    treeTwo.root = new Node(42);
    treeTwo.root.left = new Node(100);
    treeTwo.root.left.left = new Node(15);
    treeTwo.root.left.right = new Node(160);
    treeTwo.root.left.right.left = new Node(125);
    treeTwo.root.left.right.right = new Node(175);
    treeTwo.root.right = new Node(600);
    treeTwo.root.right.left = new Node(200);
    treeTwo.root.right.right = new Node(350);
    treeTwo.root.right.right.left = new Node(4);
    treeTwo.root.right.right.right = new Node(500);



    expect(treeIntersection(treeOne, treeTwo)).toEqual([100, 160, 125, 175, 200, 350, 500]);
  });
  it('Should return the word an empty array since no values are matching', () => {
    let treeOne = new Tree();
    treeOne.root = new Node(150);
    treeOne.root.left = new Node(100);
    treeOne.root.left.left = new Node(75);
    treeOne.root.left.right = new Node(160);
    treeOne.root.left.right.left = new Node(125);
    treeOne.root.left.right.right = new Node(175);
    treeOne.root.right = new Node(250);
    treeOne.root.right.left = new Node(200);
    treeOne.root.right.right = new Node(350);
    treeOne.root.right.right.left = new Node(300);
    treeOne.root.right.right.right = new Node(500);

    let treeTwo = new Tree();
    treeTwo.root = new Node(42);
    treeTwo.root.left = new Node(47);
    treeTwo.root.left.left = new Node(43);
    treeTwo.root.left.right = new Node(49);
    treeTwo.root.left.right.left = new Node(41);
    treeTwo.root.left.right.right = new Node(36);
    treeTwo.root.right = new Node(32);
    treeTwo.root.right.left = new Node(99);
    treeTwo.root.right.right = new Node(94);
    treeTwo.root.right.right.left = new Node(98);
    treeTwo.root.right.right.right = new Node(7);

    expect(treeIntersection(treeOne, treeTwo)).toEqual([]);
  });
});
