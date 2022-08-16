import React, { useState, useEffect } from "react";
import { URL, API_KEY } from "../utils/constants";
import axios from "axios";
import "../styles/TableList.css";

/*
  función que hace la petición de los articulos a la tabla
  y reenderiza la vista, busqueda incluida
*/
function TableList() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");

  const requestGet = async () => {
    await axios
      .get(URL + API_KEY)
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const searcher = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  //metodo de filtrado 2
  /*const results =  !search ? articles : articles.filter((data) => 
  data.title.toLowerCase().includes(search.toLowerCase(),
  data.description.toLowerCase().includes(search.toLowerCase())))
  */
  // metodo de filtrado 1

  let results = [];
  if (!search) {
    results = articles;
    results = articles.filter((data) =>
      data.title.toLowerCase().includes(search.toLowerCase())
    );
  } else {
    results = articles.filter((data) =>
      data.description.toLowerCase().includes(search.toLowerCase())
    );
  }
  console.log(results);

  useEffect(() => {
    requestGet();
  }, []);

  return (
    <div className="main-table-view">
      <div className="container-input">
        <input
          className="form-control inputSearch"
          value={search}
          placeholder="Search article"
          onChange={searcher}
        />
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-hover shadow-lg">
          <thead>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Author</th>
              <th>Description</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {articles &&
              results.map((article) => (
                <tr key={article.articles}>
                  <td>{article.source.name}</td>
                  <td>{article.title}</td>
                  <td>{article.author}</td>
                  <td>{article.description}</td>
                  <td>
                    <img
                      className="table-image"
                      src={article.urlToImage}
                      alt={article.image}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableList;
