// Modules
import { useLocation } from "react-router-dom";
// Components
import { Breadcrumbs } from "./Breadcrumbs";

interface BreadcrumbItem {
  label: string;
  path: string;
}

export const AutoBreadcrumbs: React.FC = () => {
  const location = useLocation();

  const pathParts = location.pathname.split("/").filter((part) => part);
  const breadcrumbItems = pathParts.reduce(
    (acc: BreadcrumbItem[], part, index) => {
      const currentPath = `/${pathParts.slice(0, index + 1).join("/")}`;
      acc.push({ label: part, path: currentPath });
      return acc;
    },
    []
  );

  return <Breadcrumbs items={breadcrumbItems} />;
};
