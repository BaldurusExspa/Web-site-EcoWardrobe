import { MouseEventHandler, ReactNode } from "react";
import "./Button.css"

type TButton = {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler;
};

export const Button: React.FC<TButton> = ({
  children = "",
  className = "",
  onClick = () => {},
}) => {
  return (
    <button className={"button-component " + className} onClick={onClick}>
      {children}
    </button>
  );
};
