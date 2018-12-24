import React, { Component } from "react";
import destinations from "./destinations.js";

function Card({ title, image, price, date, country }) {
  return (
    <div className="popular-ways__cards__card">
      <div className="popular-ways__cards__card__image-wrapper">
        <img
          className="popular-ways__cards__card__image-wrapper__image"
          src={image}
          alt={title}
        />
      </div>
      <div className="popular-ways__cards__card__info-wrapper">
        <p className="popular-ways__cards__card__info-wrapper__city">{title}</p>
        <p className="popular-ways__cards__card__info-wrapper__price">
          Найти от {price} ₽
        </p>
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
    const cards = destinations.map(el => {
      const { id, image, title, price, country, date } = el;
      return (
        <div key={id} className="col-xs-12 col-md-offset-1 col-md-10  col-xl-5">
          <Card
            image={image}
            title={title}
            price={price}
            country={country}
            date={date}
          />
        </div>
      );
    });
    return <div className="popular-ways__cards">{cards}</div>;
  }
}

export default CityCards;
