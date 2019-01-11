import React, { Component } from "react";
import offers from "./offers.js";
const Card = ({ title, text, logo, price, timeLeft, miniLogo }) => {
  return (
    <div className="special-offers__cards__card">
      <div className="special-offers__cards__card__title">
        <span className="special-offers__cards__card__title__text">
          {title}
        </span>
        <img
          className="special-offers__cards__card__title__image"
          src={miniLogo}
          alt=""
        />
      </div>
      <div className="special-offers__cards__card__wrapper">
        <div className="special-offers__cards__card__wrapper__info">
          <img
            src={logo}
            alt={text}
            className="special-offers__cards__card__wrapper__info__logo"
          />
          <div className="special-offers__cards__card__wrapper__info__wrapper">
            <div className="special-offers__cards__card__wrapper__info__wrapper__price">
              <span className="special-offers__cards__card__wrapper__info__wrapper__price__from">
                от
              </span>{" "}
              {price} Р
            </div>
            <div className="special-offers__cards__card__wrapper__info__wrapper__days-left">
              Осталось {timeLeft} дней
            </div>
          </div>
        </div>
        <div className="special-offers__cards__card__full-info">{text}</div>
        <button className="special-offers__cards__card__button">
          Узнать подробности
        </button>
      </div>
    </div>
  );
};
class OfferCards extends Component {
  state = {};
  render() {
    return (
      <div className="special-offers__cards">
        <div className="col-xl-offset-1 col-xl-10 col-xl-offset-1">
          <div className="row">
            {offers.map(el => {
              const { id, title, text, logo, timeLeft, price, miniLogo } = el;
              return (
                <div key={id} className="col-md-4">
                  <Card
                    text={text}
                    title={title}
                    logo={logo}
                    timeLeft={timeLeft}
                    price={price}
                    miniLogo={miniLogo}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default OfferCards;
