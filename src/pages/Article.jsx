import React from "react";
import { useParams } from "react-router-dom";
import { articles, obtenerArticuloPorId } from "../controllers/articles";

function Article() {
  const { id } = useParams();
  const article = obtenerArticuloPorId(id);

  if (!article) {
    return <div>Artículo no encontrado</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <img src={article.image} alt={article.title} />
      <p>{article.description}</p>
      <p>{article.date}</p>
    </div>
  );
}

export default Article;

