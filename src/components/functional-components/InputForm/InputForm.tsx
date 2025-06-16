import { ReactNode } from "react";

type TInputForm = {
  inputType: string;
  className_input?: string;
  className_label?: string;
  children?: ReactNode;
  placeholder?: string;
  maxlenght?: number;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputForm: React.FC<TInputForm> = ({
  onChange = () => {},
  inputType = "text",
  className_input = "",
  className_label = "",
  children,
  placeholder = "",
  maxlenght = 100,
  value,
}) => {
  return (
    <div className={"input-form"}>
      <label htmlFor={className_input} className={className_label}>
        {children}
      </label>
      <input
        type={inputType}
        className={className_input}
        placeholder={placeholder}
        maxLength={maxlenght}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
