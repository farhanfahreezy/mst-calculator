import { ChangeEvent, useState, useEffect } from "react";
import FileInput from "./component/FileInput";
import Output from "./component/Output";

const App = () => {
  const [algortihm, setAlgorithm] = useState("prim");
  const [graphMatrix, setGraphMatrix] = useState<Number[][]>();

  useEffect(() => {
    console.log(graphMatrix);
  }, [graphMatrix]);

  const handleGraph = (matrix: Number[][]) => {
    setGraphMatrix(matrix);
  };

  const handleRadioButton = (event: ChangeEvent<HTMLInputElement>) => {
    setAlgorithm(event.target.value);
  };
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto flex flex-col md:flex-row justify-start items-center bg-secondaryWhite font-openSans">
      <div className="md:hidden">
        <Output />
      </div>
      <FileInput
        algorithm={algortihm}
        onChange={handleRadioButton}
        handleGraph={handleGraph}
      />
      <div className="hidden md:block md:w-2/3 md:h-full">
        <Output />
      </div>
    </div>
  );
};

export default App;
