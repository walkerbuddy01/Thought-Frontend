import { ChangeEvent } from "react";

interface InputProps {
  Label?: string;
  type: string;
  placeholder: string;
  inputClass?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function InputBox({
  Label = "inputClass",
  type = "text",
  placeholder = "Enter your text",
  inputClass = "",
  onChange,
}: InputProps) {
  return (
    <div className="mb-3">
      {Label && (
        <label htmlFor={Label} className="text-sm text-white ">
          {Label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`bg-gray-800  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-100 px-2 py-1 placeholder:text-sm placeholder:text-white focus:outline-none rounded-md text-white ${inputClass} w-full ${Label}`}
        onChange={onChange}
      />
    </div>
  );
}

export default InputBox;
