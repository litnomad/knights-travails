import { knightMoves } from "./script.js";

test("knightMoves([0,0],[3,3]) returns [[0,0], [1,2], [3,3]] in 3 steps!", () => {
  expect(knightMoves([0, 0], [3, 3])).toEqual(
    `${JSON.stringify([
      [0, 0],
      [1, 2],
      [3, 3],
    ])} in ${
      [
        [0, 0],
        [1, 2],
        [3, 3],
      ].length
    } steps!`,
  );
});

test("knightMoves([3,3],[0,0]) returns [[3,3],[2,1],[0,0]] in 3 steps!", () => {
  expect(knightMoves([3, 3], [0, 0])).toEqual(
    `${JSON.stringify([
      [3, 3],
      [2, 1],
      [0, 0],
    ])} in ${
      [
        [3, 3],
        [2, 1],
        [0, 0],
      ].length
    } steps!`,
  );
});

test("knightMoves([0,0],[7,7]) returns [[0,0],[2,1],[4,2],[6,3],[4,4],[6,5],[7,7]] in 7 steps!", () => {
  expect(knightMoves([0, 0], [7, 7])).toEqual(
    `${JSON.stringify([
      [0, 0],
      [1, 2],
      [2, 4],
      [3, 6],
      [4, 4],
      [5, 6],
      [7, 7],
    ])} in ${
      [
        [0, 0],
        [1, 2],
        [2, 4],
        [3, 6],
        [4, 4],
        [5, 6],
        [7, 7],
      ].length
    } steps!`,
  );
});
