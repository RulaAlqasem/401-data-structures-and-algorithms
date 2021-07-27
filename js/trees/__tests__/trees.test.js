
const bt = require('../trees');
let Node = bt.Node
let BinaryTree = bt.BinaryTree
let treeBreadthBirst = bt.treeBreadthBirst
let fizzBuzz = bt.fizzBuzz

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
    tree = new BinaryTree(one);
  });
  // root - left - right
  it('preorder', () => {
    let expectedArr = [1, 2, 6, 7, 8, 9, 3, 4, 5];
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
  it('return maximum value', () => {
    let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    expect(tree.maximumValue()).toEqual(9);
  });
  it('return bf trees', () => {
    let expected = [1, 2, 3, 6, 4, 5, 7, 8, 9];
    expect(treeBreadthBirst(tree)).toEqual(expected);
  });
  it('fizzBuzz', () => {
    let expected = ["1", "2", "Fizz", "Fizz", "4", "Buzz", "7", "8", "Fizz",];
    let fb = fizzBuzz(tree)
    console.log();
    expect(treeBreadthBirst(fb)).toEqual(expected);
  });
});