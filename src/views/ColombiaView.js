import React from "react";
import "../styles/NewsItems.css";

const ColombiaView = ({ article }) => {
  return (
    <div className="div-news-app">
      <div></div>
      <div className="div-news-items">
        <img
          className="image-new"
          src={article.urlToImage}
          alt={article.urlToImage}
        />
        <div className="div-news-text">
          <h1>
            <a href={article.url}>{article.title}</a>
          </h1>
          <cite>{article.author}</cite>
          <p>{article.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ColombiaView;
