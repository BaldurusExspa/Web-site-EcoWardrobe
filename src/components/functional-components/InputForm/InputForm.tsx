import { ReactNode } from "react";

type TInputForm = {
  inputType: string;
  className?: string;
  children?: ReactNode;
  labelText?: string;
  placeholder?: string;
  maxlenght?: number;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputForm: React.FC<TInputForm> = ({
  onChange = () => {},
  inputType = "text",
  className = "",
  children,
  labelText = "",
  placeholder = "",
  maxlenght = 100,
  value = "",
}) => {
  return (
    <div className={"input-form " + className}>
      {children}
      <label htmlFor={className + "__input"} className={className + "__label"}>
        {labelText}
      </label>
      <input
        type={inputType}
        className={className + "__input"}
        placeholder={placeholder}
        maxLength={maxlenght}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
