// Modules
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import { Catalog } from "./components/Pages/Catalog/Catalog";
import { Authorization } from "./components/Pages/Authorization/Authorization";
import { Registration } from "./components/Pages/Registration/Registration";
import { Basket } from "./components/Pages/Basket/Basket";
import { Profile } from "./components/Pages/Profile/Profile";
import { Product } from "./components/Pages/Product/Product";
// Styles
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* !!! Все роуты !!! */}
        <Route path="*" element={<Catalog />} />

        {/* !!! Адресные роуты !!! */}
        <Route path="authorization" element={<Authorization />} />
        <Route path="registration" element={<Registration />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="basket" element={<Basket />} />
        <Route path="profile" element={<Profile />} />

        <Route path="product" element={<Product />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
