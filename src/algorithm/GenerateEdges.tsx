import { Edge } from "vis-network/standalone/esm/vis-network";

function GenerateEdges(matrix: Number[][]): Edge[] {
  const edges: Edge[] = [];
  const maxNodes = matrix.length;
  let id = 0;

  for (let i = 0; i < maxNodes - 1; i++) {
    for (let j = i + 1; j < maxNodes; j++) {
      if (matrix[i][j] !== 0) {
        id++;
        edges.push({
          from: i + 1,
          to: j + 1,
          id: id,
          label: matrix[i][j].toString(),
        });
      }
    }
  }

  return edges;
}

export default GenerateEdges;
