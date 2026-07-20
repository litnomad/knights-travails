import { getMoves } from "./moves.js";

class Node {
  constructor(vertex) {
    this.vertex = vertex;
  }
}

function knightMoves(start, end) {
  const graph = new Node(start);

  // render all possible moves from the current position and push them into the queue
  // set visited positions to avoid loops or unnecessary repeats
  const queue = [graph];
  const visited = new Set();

  while (queue.length !== 0) {
    const curr = queue.shift();

    const allPossibleMoves = getMoves(curr.vertex, visited);

    // breadth first search to build the graph
    allPossibleMoves.forEach((move, index) => {
      // if end is reached, returns current node
      if (move[0] == end[0] && move[1] == end[1]) {
        curr[`move${index}`] = new Node(move);
        return curr;
      }

      const node = (curr[`move${index}`] = new Node(move));
      queue.push(node);
    });
  }

  // traverse graph and find the shortest paths
  const paths = findPath(graph, end);

  // if only one return it
  if (paths.length === 1) {
    return `${JSON.stringify(paths[0])} in ${paths[0].length} steps!`;
  } else {
    // if more than one find the shortest
    const shortest = paths.reduce((accum, current) => {
      return accum.length < current.length ? accum : null;
    });

    return `${JSON.stringify(shortest)} in ${shortest.length} steps!`;
  }
}

function findPath(graph, end, steps = [], result = []) {
  let current = graph;

  // add the starting vertex
  if (steps.length === 0) {
    steps.push(graph.vertex);
  }

  // search all paths that end at the vertex
  if (graph.vertex.toString() == end.toString()) {
    result.push([...steps]);
    return;
  } else {
    let i = 0;
    while (graph[`move${i}`] !== undefined) {
      current = graph[`move${i}`];
      steps.push(current.vertex);

      findPath(current, end, steps, result);
      i++;
    }

    steps.splice(-1);
  }

  return result;
}

export { knightMoves };
