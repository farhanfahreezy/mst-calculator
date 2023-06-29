import { ChangeEvent } from "react";

interface RadioButtonProps {
  algorithm: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton = ({ algorithm, onChange }: RadioButtonProps) => {
  return (
    <div className="flex flex-col w-[260px] items-start bg-secondaryBlue py-5 px-10 rounded-xl gap-2 font-medium">
      <label className="flex items-center">
        <input
          type="radio"
          name="size"
          value="prim"
          className="form-radio h-4 w-4"
          onChange={onChange}
          checked={algorithm === "prim"}
        />
        <span className="ml-2 text-sm">Prim Algorithm</span>
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="size"
          value="kruskal"
          className="form-radio h-4 w-4"
          onChange={onChange}
          checked={algorithm === "kruskal"}
        />
        <span className="ml-2 text-sm">Kruskal Algorithm</span>
      </label>
    </div>
  );
};

export default RadioButton;
