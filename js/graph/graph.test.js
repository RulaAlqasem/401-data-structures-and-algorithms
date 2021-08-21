const graphMaster = require('./graph');
const Vertex = graphMaster.vertex;
const Graph = graphMaster.graph;



describe('Testing graph class functionality', () => {
  it('Should add a new node to a graph', () => {
    let test = new Graph();
    let one = new Vertex('one');
    test.addNode(one);
    expect(test.adjacencyList.get(one)).toBeTruthy();
  });
  it('Should add a new edge between two vertices', () => {
    let test = new Graph();
    let one = new Vertex('one');
    let two = new Vertex('two');
    test.addNode(one);
    test.addNode(two);
    test.addEdge(one, two);
    expect(test.adjacencyList.get(one)[0].vertex.value).toEqual('two');
  });
  it('Should be able to create a graph with one node and an edge', () => {
    let test = new Graph();
    let one = new Vertex('one');
    test.addNode(one);
    test.addEdge(one, undefined);
    expect(test.adjacencyList.get(one)).toBeTruthy();
    expect(test.adjacencyList.get(one).vertex).toEqual(undefined);
    expect(test.adjacencyList.get(one)[0].weight).toEqual(0);
  });
});

describe('Testing graph prototype functionality', () => {

  let test = new Graph();


  let one = new Vertex('one');
  let two = new Vertex('two');
  let three = new Vertex('three');
  let four = new Vertex('four');
  let five = new Vertex('five');
  let six = new Vertex('six');

  test.addNode(one);
  test.addNode(two);
  test.addNode(three);
  test.addNode(four);
  test.addNode(five);
  test.addNode(six);

  test.addEdge(one, three);
  test.addEdge(two, four);
  test.addEdge(one, four);
  test.addEdge(four, two);
  test.addEdge(four, five);
  test.addEdge(two, six);

  it('Should retrieve all nodes from a graph', () => {
    expect(test.breadthFirst(one)).toBeTruthy();
    expect(Array.isArray(test.breadthFirst(one))).toBeTruthy();
    expect(test.breadthFirst(one).length).toEqual(6);
  });
  it('Should retrieve all neighbors of a node with weights included', () => {
    expect(test.getNeighbors(one)).toBeTruthy();
    expect(test.getNeighbors(one)[0].weight).toEqual(0);
  });
  it('Should retrieve the size of a graph', () => {
    expect(test.size(one)).toEqual(6);
  });
});
