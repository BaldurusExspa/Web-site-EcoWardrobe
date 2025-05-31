import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Catalog } from "./components/Pages/Catalog/Catalog";
import "./App.css";
import { Authorization } from "./components/Pages/Authorization/Authorization";
import { Registration } from "./components/Pages/Registration/Registration";

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
