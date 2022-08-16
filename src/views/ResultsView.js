import React from "react";
import '../styles/ResultsView.css'

const ResultsView = ({ totalResults, totalAuthors }) => {
  return (
    <div className="div-results">
      <div className="div-articles">
        <h1>Total articles: {totalResults}</h1>
      </div>
      <div className="div-authors">
        <h1>Total authors: {totalAuthors}</h1>
      </div>
    </div>
  );
};

export default ResultsView;
