import { ReactNode, useState } from "react";
import "./Dropdown.css";

type TDropdown = {
  items: string[];
  itemsLinks: string[];
  children: ReactNode;
  className?: string;
};

export const Dropdown: React.FC<TDropdown> = ({
  children,
  items,
  itemsLinks,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (items.length !== itemsLinks.length) {
    console.log("Arrays items and itemsLinks must have the same length");
    return null;
  }

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${className} ${isOpen ? "open" : ""}`}>
      <label htmlFor="" className="dropdown__label" onClick={handleToggle}>
        {children}
      </label>
      <div
        className="dropdown__content"
        style={{ height: isOpen ? "auto" : "0" }}
      >
        <ul>
          {items.map((elem, ind) => (
            <li key={ind}>
              <a href={itemsLinks[ind]}>{elem}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
