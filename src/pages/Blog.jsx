import React from "react";
import NoticeList from "../components/NoticeList";
import { articles, obtenerArticuloPorId } from "../controllers/articles";


const Blog = () => {
  return (
    <div className="blog container">
      <h1 className="principal-title">Últimas publicaciones</h1>
      <div className="notices-grid row row-cols-1 row-cols-md-2 row-cols-sm-1 g-4">
        {articles.map((article) => (
          <NoticeList
            key={article.id}
            link={`/blog/${article.id}`}
            image={article.image}
            title={article.title}
            description={article.description}
            date={article.date}
          />
        ))}
      </div>
      <div className="col-lg-3 col-md-12"></div>
    </div>
  );
}

export default Blog;
