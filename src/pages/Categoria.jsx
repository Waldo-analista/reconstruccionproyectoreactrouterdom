import "../../src/assets/css/blog.css";

import ListCategories from "../Components/ListCategories";
import ListPosts from "../Components/ListPost";
import { useParams } from "react-router-dom";
import ListSubCategorias from "../Components/ListSubcategorias";

const Categoria = () => {
  const { categoria } = useParams();

  return (
    <>
      <div className="container">
        <h2 className="title-page">Pet Noticias: CATEGORY PAGE</h2>
      </div>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          className="title-page"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {`Categoria Actual Seleccionada:`}
          <span style={{ fontWeight: "700" }}>{categoria.toUpperCase()}</span>
        </h2>
      </div>
      <ListCategories />
      <ListSubCategorias />
      <ListPosts url={`/posts?categoria=${categoria}`} />
    </>
  );
};

export default Categoria;
