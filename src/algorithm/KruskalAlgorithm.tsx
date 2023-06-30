type Edge = [Number, Number, Number];

function KruskalAlgorithm(matrix: Number[][]): Number[][] {
  const n = matrix.length;
  const edges: Edge[] = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (matrix[i][j] !== 0) {
        edges.push([i, j, matrix[i][j]]);
      }
    }
  }

  edges.sort((a, b) => a[2].valueOf() - b[2].valueOf());
  const parent: number[] = [];
  const rank: number[] = [];

  for (let i = 0; i < n; i++) {
    parent[i] = i;
    rank[i] = 0;
  }

  const mst: number[][] = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));
  let edgeCount = 0;

  for (const edge of edges) {
    const [source, destination, weight] = edge;

    const sourceRoot = find(parent, source);
    const destRoot = find(parent, destination);

    if (sourceRoot !== destRoot) {
      union(parent, rank, sourceRoot, destRoot);
      mst[source.valueOf()][destination.valueOf()] = Number(weight);
      mst[destination.valueOf()][source.valueOf()] = Number(weight);
      edgeCount++;

      if (edgeCount === n - 1) {
        break;
      }
    }
  }

  return mst;
}

function find(parent: Number[], i: Number): Number {
  if (parent[i.valueOf()] === i) {
    return i;
  }
  return find(parent, parent[i.valueOf()]);
}

function union(parent: Number[], rank: Number[], x: Number, y: Number): void {
  const xRoot = find(parent, x);
  const yRoot = find(parent, y);

  if (rank[xRoot.valueOf()] < rank[yRoot.valueOf()]) {
    parent[xRoot.valueOf()] = yRoot;
  } else if (rank[yRoot.valueOf()] < rank[xRoot.valueOf()]) {
    parent[yRoot.valueOf()] = xRoot;
  } else {
    parent[yRoot.valueOf()] = xRoot;
    rank[xRoot.valueOf()] = rank[xRoot.valueOf()].valueOf() + 1;
  }
}

export default KruskalAlgorithm;
