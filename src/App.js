import "./assets/css/base/base.css";
import "./assets/css/componentes/card.css";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Sobre from "./pages/Sobre";
import Post from "./pages/Post";
import Categoria from "./pages/Categoria";
import SubCategoria from "./pages/Subcategoria";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultPage from "./pages/DefaultPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route path="/" element={<Home />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="posts/:id" element={<Post />} />
            <Route path="categoria/:categoria" element={<Categoria />} />
            <Route
              path="categoria/:categoria/:subcategoria"
              element={<SubCategoria />}
            />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
