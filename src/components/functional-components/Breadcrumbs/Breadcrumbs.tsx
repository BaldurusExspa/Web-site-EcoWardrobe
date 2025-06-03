// Modules
import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./Breadcrumb.css"

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="breadcrumb">
      <ol>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path}>
              {isLast ? (
                <span>{item.label}</span>
              ) : (
                <Link to={item.path}>{item.label}</Link>
              )}
              {index < items.length - 1 && <span>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
