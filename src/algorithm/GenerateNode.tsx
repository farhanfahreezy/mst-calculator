import { Node } from "vis-network/standalone/esm/vis-network";

function GenerateNode(matrix: Number[][]): Node[] {
  const nodes: Node[] = [];
  const maxNodes = matrix.length;

  for (let id = 1; id <= maxNodes; id++) {
    nodes.push({
      id,
      label: `node ${id}`,
    });
  }

  return nodes;
}

export default GenerateNode;
