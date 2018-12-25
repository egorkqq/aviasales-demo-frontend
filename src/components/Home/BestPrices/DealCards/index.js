import React, { Component } from "react";
import deals from "./deals.js";
const Card = ({ flag, name, country, offers }) => {
  return (
    <div className="best-prices__deal-cards__card">
      <div className="best-prices__deal-cards__card__from-wrapper">
        <img
          src={flag}
          alt=""
          className="best-prices__deal-cards__card__from-wrapper__flag"
        />
        <div className="best-prices__deal-cards__card__from-wrapper__info-wrapper">
          <h3 className="best-prices__deal-cards__card__from-wrapper__city-name">
            {name}
          </h3>
          <span className="best-prices__deal-cards__card__from-wrapper__country-name">
            {country}
          </span>
        </div>
      </div>
      <div className="best-prices__deal-cards__card__destinations">
        {offers.map(el => {
          return (
            <div
              key={el.id}
              className="best-prices__deal-cards__card__destinations__destination"
            >
              <span className="best-prices__deal-cards__card__destinations__destination__city-name">
                {el.from}
              </span>
              <span className="best-prices__deal-cards__card__destinations__destination__price">
                от {el.price} ₽
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

class DealCards extends Component {
  state = {};
  render() {
    const cards = deals.map(el => {
      const { id, icon, name, country, offers } = el;
      return (
        <Card
          key={id}
          flag={icon}
          name={name}
          country={country}
          offers={offers}
        />
      );
    });
    return <div className="best-prices__deal-cards">{cards}</div>;
  }
}

export default DealCards;
