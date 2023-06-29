import { useCallback } from "react";
import { useDropzone, FileWithPath, FileRejection } from "react-dropzone";
import Validation from "../algorithm/Validation";

interface DropzoneProps {
  handleGraph: (s: Number[][]) => void;
}

const Dropzone = ({ handleGraph }: DropzoneProps) => {
  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[], rejectedFiles: FileRejection[]) => {
      if (acceptedFiles?.length) {
        const file = acceptedFiles[0];

        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
          const fileContent = reader.result as string;
          if (Validation(fileContent)) {
            const rows = fileContent.trim().split("\n");
            const matrix = rows.map((row) =>
              row
                .trim()
                .split(" ")
                .map((cell) => parseInt(cell))
            );
            handleGraph(matrix);
          }
        };
      }
      if (rejectedFiles?.length) {
        console.log("wrong");
      }
    },
    []
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/txt": [".txt"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className="w-full h-full select-none flex justify-center items-center p-7 text-[16px] text-secondaryGray"
    >
      <input {...getInputProps()} />
      {isDragActive
        ? "Drop it like it's hot!"
        : "Click me or drag a file to upload!"}
    </div>
  );
};

export default Dropzone;
