import React, { Component } from "react";
import destinations from "./destinations.js";
import { Link } from "react-router-dom";
function Card({ title, image, price, date, country, flag }) {
  return (
    <div className="popular-ways__cards__card">
      <div className="popular-ways__cards__card__image-wrapper">
        <img
          className="popular-ways__cards__card__image-wrapper__image"
          src={image}
          alt={title}
        />
      </div>
      <img className="popular-ways__cards__card__flag" src={flag} alt="" />
      <div className="popular-ways__cards__card__info-wrapper">
        <p className="popular-ways__cards__card__info-wrapper__city">{title}</p>
        <Link
          to="/search#"
          className="popular-ways__cards__card__info-wrapper__price"
        >
          Найти от {price} ₽
        </Link>
      </div>
      <div className="popular-ways__cards__card__country-wrapper">
        <p className="popular-ways__cards__card__country-wrapper__country">
          {country}
        </p>
        <p className="popular-ways__cards__card__country-wrapper__date">
          {date}
        </p>
      </div>
    </div>
  );
}

class CityCards extends Component {
  state = {};
  render() {
    let counter = 0;
    const cards = destinations.map(el => {
      counter++;
      const classes =
        counter % 2
          ? "col-xs-12 col-md-offset-1 col-md-10 col-xl-5"
          : "col-xs-12 col-md-offset-1 col-xl-offset-0 col-md-10 col-xl-5";
      const { id, image, title, price, country, date, flag } = el;
      return (
        <div key={id} className={classes}>
          <Card
            image={image}
            title={title}
            price={price}
            country={country}
            date={date}
            flag={flag}
          />
        </div>
      );
    });
    return (
      <div className="popular-ways__cards">
        <div className="row">{cards}</div>
      </div>
    );
  }
}

export default CityCards;
