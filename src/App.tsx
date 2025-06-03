// Modules
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import { Catalog } from "./components/Pages/Catalog/Catalog";
import { Authorization } from "./components/Pages/Authorization/Authorization";
import { Registration } from "./components/Pages/Registration/Registration";
import { Basket } from "./components/Pages/Basket/Basket";
// Styles
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <h1>Тут пока ничего нет!</h1>
            </>
          }
        />
        <Route path="authorization" element={<Authorization />}/>
        <Route path="registration" element={<Registration />}/>
        <Route path="catalog" element={<Catalog />} />
        <Route path="basket" element={< Basket/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
