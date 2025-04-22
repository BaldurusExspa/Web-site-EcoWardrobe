import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Catalog } from "./components/Pages/Catalog/Catalog";
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
        <Route path="catalog" element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
