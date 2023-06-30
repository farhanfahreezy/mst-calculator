import Graph from "./Graph";
import GenerateNode from "../algorithm/GenerateNode";
import GenerateEdges from "../algorithm/GenerateEdges";

interface OutputProps {
  graphMatrix: Number[][];
}

const Output = ({ graphMatrix }: OutputProps) => {
  return (
    <div className="flex flex-col h-full w-full items-center justify-around py-5">
      <div className="text-[36px] font-medium">
        Minimum Spanning Tree
        <span className="font-medium text-white bg-primaryBlue py-2 px-4 mx-2 rounded-md">
          Calculator
        </span>
      </div>
      <div className="w-[600px] aspect-square bg-dimBlue rounded-xl overflow-hidden">
        <Graph
          nodes={GenerateNode(graphMatrix)}
          edges={GenerateEdges(graphMatrix)}
        />
      </div>
    </div>
  );
};

export default Output;
