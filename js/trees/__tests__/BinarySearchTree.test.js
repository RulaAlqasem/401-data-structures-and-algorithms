const bt = require('../trees');
let Node = bt.Node
let BinarySearchTree = bt.BinarySearchTree
let treeBreadthBirst = bt.treeBreadthBirst

describe('Binary Tree', () => {
  let tree;
  beforeAll(() => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const nine = new Node(9);
    one.left = two;
    one.right = three;
    two.left = six;
    three.left = four;
    three.right = five;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    tree = new BinarySearchTree(one);
  });
  // root - left - right
  it('preorder', () => {
    let expectedArr = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    console.log(tree.preOrder())
    expect(tree.preOrder()).toEqual(expectedArr);
  });
  // left - root - right
  it('inorder', () => {
    let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    expect(tree.inOrder()).toEqual(expected);
  });
  // left - right -root
  it('postorder', () => {
    let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    expect(tree.postOrder()).toEqual(expected);
  });
  it('return bf trees', () => {
    let expected = [1, 2, 3, 6, 4, 5, 7, 8, 9];
    expect(treeBreadthBirst(tree)).toEqual(expected);
  });
  it('Can successfully add a right child ', () => {
    let expectedArr = [1, 2, 6, 7, 8, 9, 3, 4, 5, 10];

    tree.add(10)

    console.log(tree.preOrder());
    expect(tree.preOrder()).toEqual(expectedArr);
  });
  it('Can successfully add a  left child to a single root node', () => {
    let expectedArr = [1, 2, 6, 0, 7, 8, 9, 3, 4, 5, 10];

    tree.add(0)
    console.log('lnnlll', tree.postOrder());
    expect(tree.preOrder()).toEqual(expectedArr);
  });
  it('Can successfully instantiate a tree with a single root node', () => {

    const one = new Node(1);
    tree2 = new BinarySearchTree;
    tree2.add(2)
    console.log(tree2);
    expect(tree2.root.value).toEqual(2);
  });
  it('Contains return true if tree cntains the value', () => {



    expect(tree.Contains(10)).toEqual(true);
  });
  it('Contains return false if tree cntains the value', () => {



    expect(tree.Contains(99)).toBeFalsy();
  });
});