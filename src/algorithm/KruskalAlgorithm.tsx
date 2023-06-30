interface Edge {
  from: Number;
  to: Number;
  distance: Number;
}

function KruskalAlgorithm(matrix: Number[][]): Number[][] {
  let newMatrix: Number[][] = Array.from(matrix, (row) =>
    Array.from(row, () => 0)
  );
  let addedNodes: Number[][] = [];
  let edges: Edge[] = [];

  // Generating edges
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      if (matrix[i][j] !== 0) {
        const newEdge: Edge = { from: i, to: j, distance: matrix[i][j] };
        edges.push(newEdge);
      }
    }
  }

  // Insert shortest path
  edges.sort((a, b) => a.distance.valueOf() - b.distance.valueOf());
  fillMatrix(newMatrix, addedNodes, edges[0]);
  edges.splice(0, 1);

  // Finding all edges
  let notChanging = false;
  while (notChanging) {
    const selectedEdge = getNearest(addedNodes, edges);
    const oldMatrix: Number[][] = { ...newMatrix };
    fillMatrix(newMatrix, addedNodes, edges[selectedEdge]);
    edges.splice(selectedEdge, 1);
    if (isEqual(oldMatrix, newMatrix)) {
      notChanging = true;
    }
    console.log(newMatrix);
  }

  return newMatrix;
}

function getNearest(addedNodes: Number[][], edges: Edge[]): number {
  for (let i = 0; i < edges.length; i++) {
    if (!checkCircuit(addedNodes, edges[i])) {
      return i;
    }
  }
  return 0;
}

function fillMatrix(matrix: Number[][], addedNodes: Number[][], edge: Edge) {
  matrix[edge.from.valueOf()][edge.to.valueOf()] = edge.distance;
  matrix[edge.to.valueOf()][edge.from.valueOf()] = edge.distance;
  if (addedNodes.length === 0) {
    addedNodes.push([edge.from, edge.to]);
  } else {
    let isFound = false;
    for (let i = 0; i < addedNodes.length; i++) {
      for (let j = 0; j < addedNodes[i].length; j++) {
        if (addedNodes[i][j] === edge.from) {
          addedNodes[i][j] = edge.to;
          isFound = true;
        } else if (addedNodes[i][j] === edge.to) {
          addedNodes[i][j] = edge.from;
          isFound = true;
        }
      }
    }
    if (!isFound) {
      addedNodes.push([edge.from, edge.to]);
    }
  }
}

function checkCircuit(addedNodes: Number[][], edge: Edge): boolean {
  for (let i = 0; i < addedNodes.length; i++) {
    if (addedNodes[i].includes(edge.from) && addedNodes[i].includes(edge.to)) {
      return true;
    }
  }
  return false;
}

function isEqual(oldMatrix: Number[][], newMatrix: Number[][]): boolean {
  return oldMatrix.every((row, rowIndex) =>
    row.every((value, colIndex) => value === newMatrix[rowIndex][colIndex])
  );
}

export default KruskalAlgorithm;
