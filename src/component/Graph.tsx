import { Options, Edge, Node } from "vis-network/standalone/esm/vis-network";
import useVisNetwork from "./useVisNetwork";

interface GraphProps {
  nodes: Node[];
  edges: Edge[];
}

const Graph = ({ nodes, edges }: GraphProps) => {
  const options: Options = {
    nodes: {
      shape: "dot",
      size: 10,
    },
    layout: {
      hierarchical: {
        enabled: false,
      },
    },
  };

  const { ref } = useVisNetwork({
    options,
    edges,
    nodes,
  });

  return (
    <>
      <div style={{ height: 700, width: "100%" }} ref={ref} />
    </>
  );
};

export default Graph;
