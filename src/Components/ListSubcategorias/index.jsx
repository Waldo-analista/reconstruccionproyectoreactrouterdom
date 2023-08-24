import { useState, useEffect } from "react";

import "../../assets/css/blog.css";

import { getDataFromAPI, urlAPI } from "../../api/api";

import { useParams, Link } from "react-router-dom";

const ListSubCategorias = () => {
  const [subcategorias, setSubcategorias] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const urlAPIBuild = urlAPI + "/categorias/" + categoria;

    getDataFromAPI(urlAPIBuild, (objeto) => {
      setSubcategorias(objeto.subcategorias);
    });
  }, [categoria]);

  return (
    <>
      <ul className="category-list container flex">
        {subcategorias.map((subcategoria) => (
          <li
            className={`category-list__category category-list__category--${categoria}`}
            key={subcategoria}
          >
            <Link to={`/categoria/${categoria}/${subcategoria}`}>
              {subcategoria}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListSubCategorias;
