import { moves } from "./moves.js";

class Node {
  constructor(array) {
    this.plot = array;
  }
}

function knightMoves(start, end) {
  const tree = new Node(start);

  // render all possible moves from the current position and push them into the queue
  // create set for visited positions to avoid loops or unnecessary repeats
  const queue = [tree];
  const visited = new Set();

  while (queue.length !== 0) {
    const curr = queue.shift();

    const allPossibleMoves = moves(curr.plot, visited);

    allPossibleMoves.forEach((move, index) => {
      if (move[0] == end[0] && move[1] == end[1]) {
        curr[`next${index}`] = new Node(move);
        console.log("curr", curr); // traverse with counter++ to compare paths
        console.log("tree", tree);
        return curr;
      }

      queue.push((curr[`next${index}`] = new Node(move))); 
    });
  }
}

knightMoves([0, 0], [3, 3]);
knightMoves([0, 0], [7, 7]);
