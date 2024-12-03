import React from "react";
import "./Article.css";

export default function ArticleList({ articleList }) {
  return (
    <>
      <ul>
        {articleList.map((element, index) => (
          <li key={index}>{element.name}</li>
        ))}
      </ul>
    </>
  );
}
