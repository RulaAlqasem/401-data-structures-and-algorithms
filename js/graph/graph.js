'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex,
      this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(node) {
    this.adjacencyList.set(node, []);
  }

  addEdge(startVertex, endVertex, weight = 0) {

    if (!this.adjacencyList.has(startVertex)) {
      throw new Error('Invalid start vertex');
    }

    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('no neighbors for that vertex');
    }

    return [...this.adjacencyList.get(vertex)];
  }

  breadthFirst(vertex) {

    const queue = [];
    const visited = [];

    queue.unshift(vertex);
    visited.push(vertex);

    while (queue.length) {

      const currentVertex = queue.pop();
      const neighbors = this.getNeighbors(currentVertex);

      for (let neighbor of neighbors) {

        const neighborVertex = neighbor.vertex;

        if (visited.includes(neighborVertex)) {
          continue;
        } else {
          visited.push(neighborVertex);
          queue.unshift(neighborVertex);
        }
      }
    }

    return visited;
  }




  size(start) {
    let arr = this.breadthFirst(start);
    return arr.length;
  }
}


module.exports = {
  vertex: Vertex,
  edge: Edge,
  graph: Graph,
};


