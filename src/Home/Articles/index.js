import React, { Component } from "react";
import "./styles.sass";
import articles from "./articles";
import { Link } from "react-router-dom";
const Article = ({ text, icon, title }) => {
  return (
    <div className="articles__article">
      <h5 className="articles__article__title">
        <img className="articles__article__title__image" src={icon} alt="" />
        {title}
      </h5>
      <p className="articles__article__text">
        {text}{" "}
        <Link className="articles__article__text__link" to="/">
          Подробнее
        </Link>
      </p>
    </div>
  );
};
class Articles extends Component {
  state = {};
  render() {
    return (
      <section className="articles">
        <div className="container">
          <div className="col-xl-offset-1 col-xl-10 col-xl-offset-1">
            {articles.map(el => {
              const { text, icon, title, id } = el;
              return <Article key={id} text={text} icon={icon} title={title} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Articles;
