import React, { useState, useEffect } from "react";
import { API_KEY, URL_TOP_HEADLINES } from "../utils/constants";
import axios from "axios";
import NewsView from "../views/NewsView";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(URL_TOP_HEADLINES + API_KEY);
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);

  return (
    <div className="principal-container">
      <div className="top-headings">
        {articles.map((article) => {
          return <NewsView article={article} />;
        })}
      </div>
    </div>
  );
};

export default NewsList;
