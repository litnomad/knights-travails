import { getMoves } from "./moves.js";

function knightMoves(start, end) {
  const queue = [[start, [start]]];
  const visited = new Set();

  while (queue.length !== 0) {
    const curr = queue.shift();

    if (curr[0][0] == end[0] && curr[0][1] == end[1]) {
      return `${JSON.stringify(curr[1])} in ${curr[1].length} steps!`;
    }

    const move = getMoves(curr[0], visited);

    for (let i = 0; i < move.length; i++) {
      queue.push([move[i], [...curr[1], move[i]]]);
    }
  }
}

export { knightMoves };
