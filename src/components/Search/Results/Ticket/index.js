import React, { Component } from "react";
import rossia from "./rossia.png";
import fixingButton from "./fixing-button.svg";

class Ticket extends Component {
  state = {};
  render() {
    return (
      <div className="results__ticket">
        <div className="results__ticket__buy">
          <div className="results__ticket__buy__wrapper-baggage">
            <div className="results__ticket__buy__wrapper-baggage__mini">5</div>
            <div className="results__ticket__buy__wrapper-baggage__big">15</div>
          </div>
          <button className="results__ticket__buy__wrapper-button">
            <span className="results__ticket__buy__wrapper-button__buy">
              Купить
            </span>
            <span className="results__ticket__buy__wrapper-button__price">
              за 3 331 Р
            </span>
          </button>
          <div className="results__ticket__buy__wrapper-company-name">
            на Clickavia
          </div>
          <div className="results__ticket__buy__wrapper-list" />
        </div>
        <div className="results__ticket__info">
          <div className="results__ticket__info__top-wrapper">
            <div className="results__ticket__info__top-wrapper__logo-wrapper">
              <img
                src={rossia}
                alt=""
                className="results__ticket__info__top-wrapper__logo-wrapper__image"
              />
            </div>
            <div className="results__ticket__info__top-wrapper__is-charter">
              Чартер
            </div>
            <div className="results__ticket__info__top-wrapper__share" />
          </div>
          <div className="results__ticket__info__flight-wrapper">
            <div className="results__ticket__info__flight-wrapper__wrapper-from">
              <div className="results__ticket__info__flight-wrapper__time">
                <img
                  src={fixingButton}
                  alt=""
                  className="results__ticket__info__flight-wrapper__time__icon"
                />
                00:05
              </div>
              <div className="results__ticket__info__flight-wrapper__city">
                Москва
              </div>
              <div className="results__ticket__info__flight-wrapper__date">
                24 фев 2018, Сб
              </div>
            </div>
            <div className="results__ticket__info__flight-wrapper__wrapper-way">
              <div className="results__ticket__info__flight-wrapper__wrapper-way__wrapper-length">
                <div className="results__ticket__info__flight-wrapper__wrapper-way__wrapper-length__air" />
                <div className="results__ticket__info__flight-wrapper__wrapper-way__wrapper-length__total-time">
                  Всего: 5ч
                </div>
                <div className="results__ticket__info__flight-wrapper__wrapper-way__wrapper-length__air-back" />
              </div>
              <div className="results__ticket__info__flight-wrapper__wrapper-way__wrapper-line">
                <div className="results__ticket__info__flight-wrapper__wrapper-way__wrapper-line__circle" />
                <div className="results__ticket__info__flight-wrapper__wrapper-way__wrapper-line__line" />
                <div className="results__ticket__info__flight-wrapper__wrapper-way__wrapper-line__circle" />
              </div>
              <div className="results__ticket__info__flight-wrapper__wrapper-way__wrapper-airports">
                <div className="results__ticket__info__flight-wrapper__wrapper-way__wrapper-airports__aero-name">
                  VCO
                </div>
                <div className="results__ticket__info__flight-wrapper__wrapper-way__wrapper-airports__aero-name">
                  BCN
                </div>
              </div>
            </div>
            <div className="results__ticket__info__flight-wrapper__wrapper-to">
              <div className="results__ticket__info__flight-wrapper__time">
                03:05
              </div>
              <div className="results__ticket__info__flight-wrapper__city">
                Барселона
              </div>
              <div className="results__ticket__info__flight-wrapper__date">
                24 фев 2018, Сб
              </div>
            </div>
          </div>
          <div className="results__ticket__info__flight-wrapper">
            <div className="results__ticket__info__flight-wrapper__wrapper-from">
              <div className="results__ticket__info__flight-wrapper__time">
                <img
                  src={fixingButton}
                  alt=""
                  className="results__ticket__info__flight-wrapper__time__icon"
                />
                00:05
              </div>
              <div className="results__ticket__info__flight-wrapper__city">
                Москва
              </div>
              <div className="results__ticket__info__flight-wrapper__date">
                24 фев 2018, Сб
              </div>
            </div>
            <div className="results__ticket__info__flight-wrapper__wrapper-way">
              <div className="results__ticket__info__flight-wrapper__wrapper-way__wrapper-length">
                <div className="results__ticket__info__flight-wrapper__wrapper-way__wrapper-length__air" />
                <div className="results__ticket__info__flight-wrapper__wrapper-way__wrapper-length__total-time">
                  Всего: 5ч
                </div>
                <div className="results__ticket__info__flight-wrapper__wrapper-way__wrapper-length__air-back" />
              </div>
              <div className="results__ticket__info__flight-wrapper__wrapper-way__wrapper-line">
                <div className="results__ticket__info__flight-wrapper__wrapper-way__wrapper-line__circle" />
                <div className="results__ticket__info__flight-wrapper__wrapper-way__wrapper-line__line" />
                <div className="results__ticket__info__flight-wrapper__wrapper-way__wrapper-line__circle" />
              </div>
              <div className="results__ticket__info__flight-wrapper__wrapper-way__wrapper-airports">
                <div className="results__ticket__info__flight-wrapper__wrapper-way__wrapper-airports__aero-name">
                  VCO
                </div>
                <div className="results__ticket__info__flight-wrapper__wrapper-way__wrapper-airports__aero-name">
                  BCN
                </div>
              </div>
            </div>
            <div className="results__ticket__info__flight-wrapper__wrapper-to">
              <div className="results__ticket__info__flight-wrapper__time">
                03:05
              </div>
              <div className="results__ticket__info__flight-wrapper__city">
                Барселона
              </div>
              <div className="results__ticket__info__flight-wrapper__date">
                24 фев 2018, Сб
              </div>
            </div>
          </div>
        </div>
        <div className="results__ticket__open">
          <img src="" alt="" className="results__ticket__open-icon" />
        </div>
      </div>
    );
  }
}

export default Ticket;
