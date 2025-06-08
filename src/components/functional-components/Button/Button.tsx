import { MouseEventHandler, ReactNode } from "react";
import "./Button.css";

type ButtonTypes = "button" | "submit" | "reset";

type TButton = {
  type?: ButtonTypes;
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler;
};

export const Button: React.FC<TButton> = ({
  type = "button",
  children,
  className = "",
  onClick = () => {},
}) => {
  return (
    <button
      type={type}
      className={"button-component " + className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
