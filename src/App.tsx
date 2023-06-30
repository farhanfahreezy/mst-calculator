import { ChangeEvent, useState, useEffect } from "react";
import FileInput from "./component/FileInput";
import Output from "./component/Output";
import PrimAlgorithm from "./algorithm/PrimAlgorithm";
import KruskalAlgorithm from "./algorithm/KruskalAlgorithm";

const App = () => {
  const [algortihm, setAlgorithm] = useState("prim");
  const [graphMatrix, setGraphMatrix] = useState<Number[][]>([
    [0, 1, 0],
    [1, 0, 10],
    [0, 10, 0],
  ]);

  const handleSolveButton = () => {
    if (algortihm === "prim") {
      setGraphMatrix(PrimAlgorithm(graphMatrix));
    } else {
      setGraphMatrix(KruskalAlgorithm(graphMatrix));
    }
  };

  const handleAddNodes = () => {
    const numOfRows = graphMatrix.length;
    setGraphMatrix((rows) => rows.map((row) => [...row, 0]));
    setGraphMatrix((rows) => [
      ...rows,
      Array.from({ length: numOfRows + 1 }, () => 0),
    ]);
  };

  const handleChangeEdges = (from: number, to: number, dist: number) => {
    const updatedMatrix = [...graphMatrix];
    updatedMatrix[from - 1][to - 1] = dist;
    updatedMatrix[to - 1][from - 1] = dist;
    setGraphMatrix(updatedMatrix);
  };

  const handleGraph = (matrix: Number[][]) => {
    setGraphMatrix(matrix);
  };

  const handleRadioButton = (event: ChangeEvent<HTMLInputElement>) => {
    setAlgorithm(event.target.value);
  };
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto flex flex-col md:flex-row justify-start items-center bg-secondaryWhite font-openSans">
      <div className="md:hidden">
        <Output
          graphMatrix={graphMatrix}
          handleAddNodes={handleAddNodes}
          handleChangeEdges={handleChangeEdges}
        />
      </div>
      <FileInput
        algorithm={algortihm}
        onChange={handleRadioButton}
        handleGraph={handleGraph}
        handleSolveButton={handleSolveButton}
      />
      <div className="hidden md:block md:w-2/3 md:h-full">
        <Output
          graphMatrix={graphMatrix}
          handleAddNodes={handleAddNodes}
          handleChangeEdges={handleChangeEdges}
        />
      </div>
    </div>
  );
};

export default App;
