import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  const [article, setArticle] = useState("");
  const [articleList, setArticleList] = useState([]);

  function getArticle(e) {
    setArticle(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    articleList.push({ name: article });
    setArticleList(articleList);
    setArticle("");
    console.log(articleList);
  };

  return (
    <>
      <form className="mb-3 form" onSubmit={handleSubmit}>
        <label className="form-label">Articoli</label>
        <div className="d-flex">
          <input
            type="text"
            className="form-control"
            placeholder="Inserisci un nuovo articolo"
            value={article}
            onChange={(e) => getArticle(e)}
            required
          />
          <button type="submit" className="btn btn-primary">
            Inserisci
          </button>
        </div>
      </form>
    </>
  );
}
