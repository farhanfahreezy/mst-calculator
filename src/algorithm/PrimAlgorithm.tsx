interface Edge {
  from: Number;
  to: Number;
  distance: Number;
}

function PrimAlgorithm(matrix: Number[][]): Number[][] {
  let newMatrix: Number[][] = Array.from(matrix, (row) =>
    Array.from(row, () => 0)
  );
  let addedNodes: Number[] = [];
  let edges: Edge[] = [];

  // Generating edges
  for (let i = 0; i < matrix.length - 1; i++) {
    let disconnected = true;
    for (let j = i + 1; j < matrix.length; j++) {
      if (matrix[i][j] !== 0) {
        const newEdge: Edge = { from: i, to: j, distance: matrix[i][j] };
        edges.push(newEdge);
        disconnected = false;
      }
    }
  }

  // Insert shortest path
  edges.sort((a, b) => a.distance.valueOf() - b.distance.valueOf());
  fillMatrix(newMatrix, addedNodes, edges[0]);
  edges.splice(0, 1);

  // Finding all edges
  while (matrix.length !== addedNodes.length) {
    const selectedEdge = getNearest(addedNodes, edges);
    fillMatrix(newMatrix, addedNodes, edges[selectedEdge]);
    edges.splice(selectedEdge, 1);
  }

  return newMatrix;
}

function getNearest(addedNodes: Number[], edges: Edge[]): number {
  for (let i = 0; i < edges.length; i++) {
    if (
      addedNodes.includes(edges[i].from) !== addedNodes.includes(edges[i].to)
    ) {
      return i;
    }
  }
  return 0;
}

function fillMatrix(matrix: Number[][], addedNodes: Number[], edge: Edge) {
  matrix[edge.from.valueOf()][edge.to.valueOf()] = edge.distance;
  matrix[edge.to.valueOf()][edge.from.valueOf()] = edge.distance;
  if (!addedNodes.includes(edge.from)) {
    addedNodes.push(edge.from);
  }
  if (!addedNodes.includes(edge.to)) {
    addedNodes.push(edge.to);
  }
}

export default PrimAlgorithm;
