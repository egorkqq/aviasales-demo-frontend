import React, { Component } from "react";
import fixingButton from "./fixing-button.svg";
import { FormattedNumber } from "react-intl";
import FormattedDuration from "react-intl-formatted-duration";
import { format } from "date-fns";
import ru from "date-fns/locale/ru";
import { Link } from "react-router-dom";

class Ticket extends Component {
  state = {};
  render() {
    const {
      outbound,
      back,
      isCharter,
      airlines,
      offers,
      baggage
    } = this.props.data;

    return (
      <div className="results__ticket">
        <div className="results__ticket__buy">
          <div className="results__ticket__buy__wrapper-baggage">
            <div className="results__ticket__buy__wrapper-baggage__mini">
              {baggage.mini}
            </div>
            <div className="results__ticket__buy__wrapper-baggage__big">
              {baggage.full}
            </div>
          </div>
          <button className="results__ticket__buy__wrapper-button">
            <span className="results__ticket__buy__wrapper-button__buy">
              Купить
            </span>
            <span className="results__ticket__buy__wrapper-button__price">
              за{" "}
              <FormattedNumber
                value={offers[0].price}
                style={`currency`}
                currency="RUB"
                minimumFractionDigits={0}
                maximumFractionDigits={0}
              />
            </span>
          </button>
          <div className="results__ticket__buy__wrapper-company-name">
            на {offers[0].company}
          </div>
          <div className="results__ticket__buy__wrapper-list">
            {offers.length > 1
              ? offers.map((offer, index) => {
                  if (index === 0 || index >= 3) return null;
                  return (
                    <Link
                      to="/search"
                      key={index}
                      className="results__ticket__buy__wrapper"
                    >
                      <div className="results__ticket__buy__wrapper-list__offer">
                        <div className="results__ticket__buy__wrapper-list__offer__company">
                          {offer.company}
                        </div>
                        <div className="results__ticket__buy__wrapper-list__offer__price">
                          <FormattedNumber
                            value={offer.price}
                            style={`currency`}
                            currency="RUB"
                            minimumFractionDigits={0}
                            maximumFractionDigits={0}
                          />
                        </div>
                      </div>
                    </Link>
                  );
                })
              : null}
            {offers.length > 3 ? (
              <div className="results__ticket__buy__wrapper-list__show-more">
                + Еще {offers.length - 3} предложения
              </div>
            ) : null}
          </div>
        </div>
        <div className="results__ticket__info">
          <div className="results__ticket__info__top-wrapper">
            <div className="results__ticket__info__top-wrapper__logo-wrapper">
              <img
                src={airlines[0]}
                alt=""
                className="results__ticket__info__top-wrapper__logo-wrapper__image"
              />
            </div>
            {isCharter ? (
              <div className="results__ticket__info__top-wrapper__is-charter">
                Чартер
              </div>
            ) : null}
            <button className="results__ticket__info__top-wrapper__share" />
          </div>
          <div className="results__ticket__info__flight-wrapper">
            <div className="results__ticket__info__flight-wrapper__wrapper-from">
              <div className="results__ticket__info__flight-wrapper__time">
                <img
                  src={fixingButton}
                  alt=""
                  className="results__ticket__info__flight-wrapper__time__icon"
                />
                {format(outbound.origin.dateTime * 1000, "HH:mm", {
                  locale: ru
                })}
              </div>
              <div className="results__ticket__info__flight-wrapper__city">
                {outbound.origin.city}
              </div>
              <div className="results__ticket__info__flight-wrapper__date">
                {format(outbound.origin.dateTime * 1000, "DD MMM YYYY[, ] dd", {
                  locale: ru
                })}
              </div>
            </div>
            <div className="results__ticket__info__flight-wrapper__wrapper-way">
              <div className="results__ticket__info__flight-wrapper__wrapper-way__wrapper-length">
                <div className="results__ticket__info__flight-wrapper__wrapper-way__wrapper-length__air" />
                <div className="results__ticket__info__flight-wrapper__wrapper-way__wrapper-length__total-time">
                  Всего:{" "}
                  <FormattedDuration
                    seconds={outbound.duration}
                    format="extra_short"
                  />
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
                  {outbound.origin.airport}
                </div>
                <div className="results__ticket__info__flight-wrapper__wrapper-way__wrapper-airports__aero-name">
                  {outbound.destination.airport}
                </div>
              </div>
            </div>
            <div className="results__ticket__info__flight-wrapper__wrapper-to">
              <div className="results__ticket__info__flight-wrapper__time">
                {format(outbound.destination.dateTime * 1000, "HH:mm", {
                  locale: ru
                })}
              </div>
              <div className="results__ticket__info__flight-wrapper__city">
                {outbound.destination.city}
              </div>
              <div className="results__ticket__info__flight-wrapper__date">
                {format(
                  outbound.destination.dateTime * 1000,
                  "DD MMM YYYY[, ] dd",
                  {
                    locale: ru
                  }
                )}
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
                {format(back.origin.dateTime * 1000, "HH:mm", {
                  locale: ru
                })}
              </div>
              <div className="results__ticket__info__flight-wrapper__city">
                {back.origin.city}
              </div>
              <div className="results__ticket__info__flight-wrapper__date">
                {format(back.origin.dateTime * 1000, "DD MMM YYYY[, ] dd", {
                  locale: ru
                })}
              </div>
            </div>
            <div className="results__ticket__info__flight-wrapper__wrapper-way">
              <div className="results__ticket__info__flight-wrapper__wrapper-way__wrapper-length">
                <div className="results__ticket__info__flight-wrapper__wrapper-way__wrapper-length__air" />
                <div className="results__ticket__info__flight-wrapper__wrapper-way__wrapper-length__total-time">
                  Всего:{" "}
                  <FormattedDuration
                    seconds={back.duration}
                    format="extra_short"
                  />
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
                  {back.origin.airport}
                </div>
                <div className="results__ticket__info__flight-wrapper__wrapper-way__wrapper-airports__aero-name">
                  {back.destination.airport}
                </div>
              </div>
            </div>
            <div className="results__ticket__info__flight-wrapper__wrapper-to">
              <div className="results__ticket__info__flight-wrapper__time">
                {format(back.destination.dateTime * 1000, "HH:mm", {
                  locale: ru
                })}
              </div>
              <div className="results__ticket__info__flight-wrapper__city">
                {back.destination.city}
              </div>
              <div className="results__ticket__info__flight-wrapper__date">
                {format(
                  back.destination.dateTime * 1000,
                  "DD MMM YYYY[, ] dd",
                  {
                    locale: ru
                  }
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="results__ticket__open">
          <div className="results__ticket__open-icon" />
        </div>
      </div>
    );
  }
}

export default Ticket;
