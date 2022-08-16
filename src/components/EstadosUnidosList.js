import React, { useState, useEffect } from "react";
import { API_KEY, URL_EEUU } from "../utils/constants";
import axios from "axios";
import EstadosUnidosView from "../views/EstadosUnidosView";

const EstadosUnidosList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(URL_EEUU + API_KEY);
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);

  return (
    <div className="principal-container">
      <div className="top-headings">
        {articles.map((article) => {
          return <EstadosUnidosView article={article} />;
        })}
      </div>
    </div>
  );
};

export default EstadosUnidosList;
