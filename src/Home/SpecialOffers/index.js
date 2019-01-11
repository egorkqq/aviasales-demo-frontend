import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.sass";
import OfferCards from "./OfferCards";
class SpecialOffers extends Component {
  state = {};
  render() {
    return (
      <section className="special-offers">
        <div className="container">
          <div className="col-xl-offset-1">
            <h2 className="special-offers__text">
              Спецпредложения на авиабилеты
            </h2>
          </div>
          <OfferCards />
          <div className="col-xl-offset-1 col-xl-10 col-xl-offset-1">
            <div className="special-offers_wrapper">
              <Link className="special-offers__link" to="/">
                Смотреть все спецпредложения
              </Link>
              <span className="special-offers__disclaimer">
                * средняя цена по направлению
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SpecialOffers;
