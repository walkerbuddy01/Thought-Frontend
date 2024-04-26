import { ChangeEvent } from "react";

interface InputProps {
  Label?: string;
  LabelClass?:string;
  type: string;
  placeholder: string;
  inputClass?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

function InputBox({
  Label = "inputClass",
  LabelClass = "",
  type = "text",
  placeholder = "Enter your text",
  inputClass = "",
  onChange,
  disabled = false,
  ...props
}: InputProps) {
  return (
    <div className="mb-3">
      {Label && (
        <label htmlFor={Label} className={`text-sm text-white ${LabelClass} `}>
          {Label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`bg-gray-800  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-100 px-2 py-1 placeholder:text-sm text-sm placeholder:text-white focus:outline-none rounded-md text-white ${inputClass} w-full ${Label}`}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
    </div>
  );
}

export default InputBox;
