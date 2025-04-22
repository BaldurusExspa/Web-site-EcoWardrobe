import { ReactNode } from "react"

type TInputForm = {
  inputType: string,
  className: string,
  children?: ReactNode,
  labelText?: string,
  placeholder?: string,
  maxlenght?: number,
}

export const InputForm: React.FC<TInputForm> = ({
  inputType = "text",
  className = "example-class-name",
  children,
  labelText = "",
  placeholder = "",
  maxlenght = 100,
}) => {
  return (
    <div className={"input-form " + className}>
      {children}
      <label htmlFor={className + "__input"} className={className + "__label"}>
        {labelText}
      </label>
      <input type={inputType} className={className + "__input"} placeholder={placeholder} maxLength={maxlenght} />
    </div>
  )
}