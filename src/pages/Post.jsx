import "../assets/css/componentes/card.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { urlAPI, getDataFromAPI } from "../api/api";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const params = useParams();

  const id = params.id;

  const [dataPost, setDataPost] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const urlAPIBuild = urlAPI + "/posts/" + id;
    getDataFromAPI(urlAPIBuild, setDataPost).catch((error) =>
      navigate("/error-404")
    );
  }, [id]);

  return (
    <main className="container flex flex--center">
      <article className="card post">
        <h2 className="post-card__title">{dataPost.title}</h2>
        <p className="text__card">{dataPost.body}</p>
      </article>
    </main>
  );
};

export default Post;
