## Knights Travails

Demonstrates the use of breadth first search in order to find the shortest path between two squares or vertices that the knight can move along the edges of the chessboard. (the Odin Project curriculum: https://www.theodinproject.com/lessons/javascript-knights-travails)


## Objective

Sometimes there is more than one fastest path but any one of them may be returned. Examples of this are shown below. 

- `knightMoves([0,0],[3,3])` may return `[[0,0],[2,1],[3,3]]` or `[[0,0],[1,2],[3,3]]`
- `knightMoves([3,3],[0,0])` may return `[[3,3],[2,1],[0,0]]` or `[[3,3],[1,2],[0,0]]`
- `knightMoves([0,0],[7,7])` may return `[[0,0],[2,1],[4,2],[6,3],[4,4],[6,5],[7,7]]` or `[[0,0],[2,1],[4,2],[6,3],[7,5],[5,6],[7,7]]` or other possible shortest paths.

Result

```
 > knightMoves([0,0],[3,3])
  => [[0,0], [1,2], [3,3]] in 3 steps!
```

## Test
Tested with script.test.js