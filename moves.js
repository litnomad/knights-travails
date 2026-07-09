function moves(vertex, visited) {
  const possibilities = [];

  let x = vertex[0] + 1;
  let y = vertex[1] + 2;
  if (x >= 0 && x <= 7 && y >= 0 && y <= 7 && !visited.has([x, y].toString())) {
    possibilities.push([x, y]);
    visited.add([x, y].toString());
  }

  x = vertex[0] + 1;
  y = vertex[1] - 2;
  if (x >= 0 && x <= 7 && y >= 0 && y <= 7 && !visited.has([x, y].toString())) {
    possibilities.push([x, y]);
    visited.add([x, y].toString());
  }

  x = vertex[0] - 1;
  y = vertex[1] + 2;
  if (x >= 0 && x <= 7 && y >= 0 && y <= 7 && !visited.has([x, y].toString())) {
    possibilities.push([x, y]);
    visited.add([x, y].toString());
  }

  x = vertex[0] - 1;
  y = vertex[1] - 2;
  if (x >= 0 && x <= 7 && y >= 0 && y <= 7 && !visited.has([x, y].toString())) {
    possibilities.push([x, y]);
    visited.add([x, y].toString());
  }

  x = vertex[0] + 2;
  y = vertex[1] + 1;
  if (x >= 0 && x <= 7 && y >= 0 && y <= 7 && !visited.has([x, y].toString())) {
    possibilities.push([x, y]);
    visited.add([x, y].toString());
  }

  x = vertex[0] + 2;
  y = vertex[1] - 1;
  if (x >= 0 && x <= 7 && y >= 0 && y <= 7 && !visited.has([x, y].toString())) {
    possibilities.push([x, y]);
    visited.add([x, y].toString());
  }

  x = vertex[0] - 2;
  y = vertex[1] + 1;
  if (x >= 0 && x <= 7 && y >= 0 && y <= 7 && !visited.has([x, y].toString())) {
    possibilities.push([x, y]);
    visited.add([x, y].toString());
  }

  x = vertex[0] - 2;
  y = vertex[1] - 1;
  if (x >= 0 && x <= 7 && y >= 0 && y <= 7 && !visited.has([x, y].toString())) {
    possibilities.push([x, y]);
    visited.add([x, y].toString());
  }

  return possibilities;
}

export { moves };
