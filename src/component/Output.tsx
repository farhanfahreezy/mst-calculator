import { useState, ChangeEvent, useEffect } from "react";
import { Edge, Node } from "vis-network/standalone/esm/vis-network";
import Graph from "./Graph";
import GenerateNode from "../algorithm/GenerateNode";
import GenerateEdges from "../algorithm/GenerateEdges";
import { MdClose } from "react-icons/md";

interface OutputProps {
  graphMatrix: Number[][];
  handleAddNodes: () => void;
  handleChangeEdges: (from: number, to: number, dist: number) => void;
  handleRemoveNodes: (n: number) => void;
}

const Output = ({
  graphMatrix,
  handleAddNodes,
  handleChangeEdges,
  handleRemoveNodes,
}: OutputProps) => {
  const [nodeFrom, setNodeFrom] = useState(1);
  const [nodeTo, setNodeTo] = useState(2);
  const [distance, setDistance] = useState(0);
  const [wrongInput, setWrongInput] = useState(false);
  const [nodeRemove, setNodeRemove] = useState(0);

  const [nodes, setNodes] = useState<Node[]>();
  const [edges, setEdges] = useState<Edge[]>();

  useEffect(() => {
    setNodes(GenerateNode(graphMatrix));
    setEdges(GenerateEdges(graphMatrix));
  }, [graphMatrix]);

  const handleNodeFromChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(event.target.value);
    if (val) {
      setNodeFrom(val);
    } else {
      setNodeFrom(0);
    }
  };

  const handleNodeToChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(event.target.value);
    if (val) {
      setNodeTo(val);
    } else {
      setNodeTo(0);
    }
  };

  const handleDistChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const val = parseInt(event.target.value);
    if (val) {
      setDistance(val);
    } else {
      setDistance(0);
    }
  };

  const handleNodeRemoveChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const val = parseInt(event.target.value);
    if (val) {
      setNodeRemove(val);
    } else {
      setNodeRemove(0);
    }
  };
  return (
    <div className="flex flex-col h-full w-full items-center pt-10">
      <div className="text-[36px] font-medium">
        Minimum Spanning Tree
        <span className="font-medium text-white bg-primaryBlue py-2 px-4 mx-2 rounded-md shadow-md">
          Calculator
        </span>
      </div>
      <div className="flex flex-row h-full w-fit px-10 gap-10 items-center justify-center">
        <div className="w-[600px] aspect-square bg-dimBlue rounded-xl overflow-hidden shadow-inner hover:shadow-inner-xl">
          <Graph nodes={nodes!} edges={edges!} />
        </div>
        <div className="flex flex-col gap-2 bg-white p-5 rounded-xl shadow-md relative">
          <div
            className={
              wrongInput
                ? "absolute bottom-[-50px] left-0 w-full flex flex-row justify-between items-center text-white bg-secondaryRed py-2 px-4 rounded-md font-medium transition-all"
                : "absolute bottom-[-30px] opacity-0 left-0 w-full flex flex-row justify-between items-center text-white bg-secondaryRed py-2 px-4 rounded-md font-medium transition-all"
            }
          >
            <div>Wrong Input!</div>
            <button
              onClick={() => {
                setWrongInput(false);
              }}
            >
              <MdClose color="white" size={20} />
            </button>
          </div>
          <div className="font-medium text-[24px] mb-1">Customize Graph</div>
          <button
            className="px-4 py-2 bg-primaryBlue rounded-md text-white font-medium"
            onClick={handleAddNodes}
          >
            Add Node
          </button>
          <div className="flex flex-row justify-between items-center bg-secondaryWhite py-2 px-4 rounded-md shadow-inner-xl">
            <div>Node Remove</div>
            <input
              value={nodeRemove}
              onChange={handleNodeRemoveChange}
              className="px-2 my-1 w-[50px] text-right bg-white rounded-md"
            ></input>
          </div>
          <button
            className="py-[6px] hover:py-[8px] bg-white text-primaryBlue border-primaryBlue border-[2px] rounded-md hover:bg-primaryBlue hover:border-0 hover:text-white font-medium transition-all"
            onClick={() => {
              const numOfRow = graphMatrix.length;
              if (nodeRemove > 0 && nodeRemove < numOfRow + 1) {
                handleRemoveNodes(nodeRemove);
              } else {
                setWrongInput(true);
              }
            }}
          >
            Remove Node
          </button>
          <div className="py-2 px-4 bg-secondaryWhite rounded-md shadow-inner-xl">
            <div className="flex flex-row justify-between items-center">
              <div>From</div>
              <input
                value={nodeFrom}
                onChange={handleNodeFromChange}
                className="px-2 my-1 w-[50px] text-right bg-white rounded-md"
              ></input>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div>To</div>
              <input
                value={nodeTo}
                onChange={handleNodeToChange}
                className="px-2 my-1 w-[50px] text-right bg-white rounded-md"
              ></input>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div>Distance</div>
              <input
                value={distance}
                onChange={handleDistChange}
                className="px-2 my-1 w-[50px] text-right bg-white rounded-md"
              ></input>
            </div>
          </div>
          <button
            className="px-4 py-2 bg-primaryBlue rounded-md text-white font-medium"
            onClick={() => {
              const numOfRow = graphMatrix.length;
              if (
                !(nodeFrom > 0 && nodeFrom < numOfRow + 1) ||
                !(nodeTo > 0 && nodeTo < numOfRow + 1) ||
                distance < 0 ||
                nodeFrom === nodeTo
              ) {
                setWrongInput(true);
              } else {
                handleChangeEdges(nodeFrom, nodeTo, distance);
              }
            }}
          >
            Change Edges
          </button>
        </div>
      </div>
    </div>
  );
};

export default Output;
