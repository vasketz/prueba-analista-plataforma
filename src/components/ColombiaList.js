import React, { useState, useEffect } from "react";
import { API_KEY, URL_COLOMBIA } from "../utils/constants";
import axios from "axios";
import ColombiaView from "../views/ColombiaView";

const ColombiaList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(URL_COLOMBIA + API_KEY);
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);

  return (
    <div className="principal-container">
      <div className="top-headings">
        {articles.map((article) => {
          return <ColombiaView article={article} />;
        })}
      </div>
    </div>
  );
};

export default ColombiaList;
