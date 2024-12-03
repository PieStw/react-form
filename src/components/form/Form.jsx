import React, { useState } from "react";
import "./Form.css";
import ArticleList from "../articleList/ArticleList";

export default function Form() {
  const [article, setArticle] = useState("");
  const [articleList, setArticleList] = useState([]);

  function getArticle(e) {
    setArticle(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newArticleList = [...articleList, { name: article }];
    setArticleList(newArticleList);
    setArticle("");
  };

  function deleteArticle(index) {
    const newArticleList = [...articleList];
    newArticleList.splice(index, 1);
    setArticleList(newArticleList);
  }

  return (
    <>
      <form className="mb-1 form" onSubmit={handleSubmit}>
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
      <div className="articleList">
        <ArticleList
          articleList={articleList}
          deleteArticle={deleteArticle}
        ></ArticleList>
      </div>
    </>
  );
}
