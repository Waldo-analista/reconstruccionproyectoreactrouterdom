import "../../assets/css/componentes/card.css";
import { useState, useEffect } from "react";
import { urlAPI, getDataFromAPI } from "../../api/api";
import { Link } from "react-router-dom";

const ListPosts = ({ url }) => {
  const [posts, setPosts] = useState([]);
  const [flagData, setflagData] = useState(true);

  useEffect(() => {
    const urlAPIConstruida = urlAPI + url;
    getDataFromAPI(urlAPIConstruida, setPosts);
    if (posts.length > 0) {
      setflagData(true);
    } else {
      setflagData(false);
    }
  }, [url, posts]);

  return (
    <>
      <section className="posts container">
        {flagData ? (
          posts.map((post) => {
            const { id, title, metadescription, categoria, subcategoria } =
              post;
            return (
              <Link
                to={`/posts/${id}`}
                className={`post__card post-card--${categoria}`}
                key={id}
              >
                <article style={{ textAlign: "center" }}>
                  <div>
                    <h1 style={{ paddingBottom: "1rem" }}>
                      Categoria:
                      <span
                        style={{ fontWeight: 700 }}
                      >{` ${categoria.toUpperCase()}`}</span>
                    </h1>
                    <h2 style={{ paddingBottom: "1rem" }}>
                      Subcategoria:
                      <span
                        style={{ fontWeight: 700 }}
                      >{` ${subcategoria.toUpperCase()}`}</span>
                    </h2>
                  </div>
                  <h3 className="post-card__title">{title}</h3>
                  <p className="post-card__meta">{metadescription}</p>
                </article>
              </Link>
            );
          })
        ) : (
          <div>No existe data para esta query</div>
        )}
      </section>
    </>
  );
};

export default ListPosts;
