// Modules
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { JSX } from "react";
// Components
import { useAuth } from "./api/authContext";
import { Catalog } from "./components/Pages/Catalog/Catalog";
import { Authorization } from "./components/Pages/Authorization/Authorization";
import { Registration } from "./components/Pages/Registration/Registration";
import { Basket } from "./components/Pages/Basket/Basket";
import { Profile } from "./components/Pages/Profile/Profile";
import { Product } from "./components/Pages/Product/Product";
// Styles

export const Router = () => {
  // const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  //   // const { isAuthenticated, isLoading } = useAuth();

  //   // if (isLoading) {
  //   //   return <div>Loading...</div>;
  //   // }

  //   // if (!isAuthenticated) {
  //   //   return <Navigate to="/login" replace />;
  //   // }

  //   return children;
  // };

  return (
    <Routes>
      {/* !!! Все роуты !!! */}
      <Route path="*" element={<Catalog />} />

      {/* !!! Адресные роуты !!! */}
      <Route path="/authorization" element={<Authorization />} />
      <Route path="/registration" element={<Registration />} />
      <Route
        path="/profile"
        element={
          // <ProtectedRoute>
            <Profile />
          // </ProtectedRoute>
        }
      />

      <Route path="/products/:productId" element={<Product />} />
    </Routes>
  );
};
