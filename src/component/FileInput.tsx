import { ChangeEvent } from "react";
import RadioButton from "./RadioButton";
import Dropzone from "./Dropzone";

interface FileInputProps {
  algorithm: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleGraph: (s: Number[][]) => void;
  handleSolveButton: () => void;
}

const FileInput = ({
  algorithm,
  onChange,
  handleGraph,
  handleSolveButton,
}: FileInputProps) => {
  return (
    <div className="flex flex-col h-full w-full md:w-1/3 md:min-w-[300px] items-center justify-center shadow-lg z-[0] p-5 gap-5 bg-primaryWhite">
      <div className="flex w-full h-full max-h-[400px] max-w-[600px] bg-secondaryWhite rounded-md items-center justify-center shadow-inner hover:shadow-inner-xl transition-all">
        <Dropzone handleGraph={handleGraph} />
      </div>
      <button
        className="py-3 w-full max-w-[600px] bg-primaryBlue rounded-xl text-primaryWhite hover:scale-[1.01] hover:shadow-lg hover:shadow-dimBlue active:scale-[0.98] transition-all"
        onClick={handleSolveButton}
      >
        <div className="text-[24px] font-medium">Solve</div>
      </button>
      <RadioButton algorithm={algorithm} onChange={onChange} />
    </div>
  );
};

export default FileInput;
