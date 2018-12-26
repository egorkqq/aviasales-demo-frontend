import React, { Component } from "react";
import { Link } from "react-router-dom";
import { cards } from "./cards.js";
let counter = 1;
const Card = ({ title, destinations, withoutLink }) => {
  return (
    <div className="col-xs-6 col-md-3 col-xl-2">
      <div className="footer__footer-cards__card">
        <h6 className="footer__footer-cards__card__title">{title}</h6>
        {destinations.map(el => {
          counter++;
          return (
            <Link
              key={counter}
              to="/"
              className="footer__footer-cards__card__destination"
            >
              {el}
            </Link>
          );
        })}
        {!withoutLink ? (
          <Link to="/" className="footer__footer-cards__card__more">
            Все страны →
          </Link>
        ) : null}
      </div>
    </div>
  );
};

class FooterCards extends Component {
  state = {};
  render() {
    return (
      <div className="footer__footer-cards">
        <div className="row">
          {cards.map(el => {
            const { id, title, destinations, withoutLink } = el;
            return (
              <Card
                key={id}
                title={title}
                destinations={destinations}
                withoutLink={withoutLink}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default FooterCards;
