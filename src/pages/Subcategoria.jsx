import "../../src/assets/css/blog.css";

import ListCategories from "../Components/ListCategories";
import ListPosts from "../Components/ListPost";
import { useParams } from "react-router-dom";
import ListSubCategorias from "../Components/ListSubcategorias";

const SubCategoria = () => {
  const { categoria, subcategoria } = useParams();

  return (
    <>
      <div className="container">
        <h2 className="title-page">Pet Noticias: SUBCATEGORY PAGE</h2>
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
          {`Subcategoria Actual Seleccionada:`}
          <span style={{ fontWeight: "700" }}>
            {subcategoria.toUpperCase() +
              " de Categoria: " +
              categoria.toUpperCase()}
          </span>
        </h2>
      </div>
      <ListCategories />
      <ListSubCategorias />
      <ListPosts url={`/posts?subcategoria=${subcategoria}`} />
    </>
  );
};

export default SubCategoria;

/*

 useEffect(() => {
    const urlAPIBuild = urlAPI + "/categorias/" + categoria;

    getDataFromAPI(urlAPIBuild, (objeto) => {
      setSubcategorias(objeto.subcategorias);
    });
  }, [categoria]);

<div className="container">
        <h2 className="title-page">Pet Noticias 2</h2>
      </div>
      <ListCategories />
      <ul className="category-list container flex">
        {subcategorias.map((subcategoria) => (
          <li
            className={`category-list__category category-list__category--${categoria}`}
            key={subcategoria}
          >
            <Link to={`${window.location.pathname}/${subcategoria}`}>
              {subcategoria}
            </Link>
          </li>
        ))}
      </ul>
      <ListPosts url={`/posts?subcategoria=${categoria}`} />

*/
