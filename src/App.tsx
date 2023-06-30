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
    // [0, 4, 0, 0, 0, 0, 0],
    // [4, 0, 1, 3, 0, 0, 0],
    // [0, 1, 0, 2, 0, 0, 0],
    // [0, 3, 2, 0, 1, 0, 0],
    // [0, 0, 0, 1, 0, 2, 0],
    // [0, 0, 0, 0, 2, 0, 3],
    // [0, 0, 0, 0, 0, 3, 0],
  ]);

  useEffect(() => {
    console.log(graphMatrix);
    PrimAlgorithm(graphMatrix);
  }, [graphMatrix]);

  const handleSolveButton = () => {
    if (algortihm === "prim") {
      setGraphMatrix(PrimAlgorithm(graphMatrix));
    } else {
      setGraphMatrix(KruskalAlgorithm(graphMatrix));
    }
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
        <Output graphMatrix={graphMatrix} />
      </div>
      <FileInput
        algorithm={algortihm}
        onChange={handleRadioButton}
        handleGraph={handleGraph}
        handleSolveButton={handleSolveButton}
      />
      <div className="hidden md:block md:w-2/3 md:h-full">
        <Output graphMatrix={graphMatrix} />
      </div>
    </div>
  );
};

export default App;
