import React, { Component, Fragment } from "react";
import "./PassengersPicker.sass";
import Checkbox from "../../Search/Filters/Checkbox";
import pluralize from "pluralize-ru";
class PassengersPicker extends Component {
  state = {
    isOpened: false,
    count: 1,
    adults: 1,
    kids: 0,
    toddlers: 0,
    isBuisness: false
  };
  updateCount = () => {
    this.setState(prevState => {
      const newCount = prevState.adults + prevState.kids + prevState.toddlers;
      return { count: newCount };
    });
  };
  toggle = () => {
    this.setState(prevState => {
      return { isOpened: !prevState.isOpened };
    });
  };
  decrementAdults = () => {
    this.state.adults > 1 &&
      this.setState(prevState => {
        return { adults: prevState.adults - 1 };
      });
    this.updateCount();
  };
  incrementAdults = () => {
    this.state.count <= 8 &&
      this.setState(prevState => {
        return { adults: prevState.adults + 1 };
      });
    this.updateCount();
  };
  decrementKids = () => {
    this.state.kids > 0 &&
      this.setState(prevState => {
        return { kids: prevState.kids - 1 };
      });
    this.updateCount();
  };
  incrementKids = () => {
    this.state.count <= 8 &&
      this.state.adults >= 1 &&
      this.setState(prevState => {
        return { kids: prevState.kids + 1 };
      });
    this.updateCount();
  };
  decrementToddlers = () => {
    this.state.toddlers > 0 &&
      this.setState(prevState => {
        return { toddlers: prevState.toddlers - 1 };
      });
    this.updateCount();
  };
  incrementToddlers = () => {
    this.state.count <= 8 &&
      this.state.adults >= 1 &&
      this.setState(prevState => {
        return { toddlers: prevState.toddlers + 1 };
      });
    this.updateCount();
  };
  setBuisness = () => {
    this.setState(prevState => {
      return { isBuisness: !prevState.isBuisness };
    });
  };

  render() {
    const { count, adults, kids, toddlers, isBuisness } = this.state;
    return (
      <Fragment>
        <div className="header-search__search-filters__passengers-picker">
          <div
            onClick={this.toggle}
            className="header__search-filters__passengers-picker__input"
            type="text"
          >
            <span className="header-search__search-filters__passengers-picker__counter">
              {pluralize(
                count,
                "нет пассажиров,",
                "%d пассажир,",
                "%d пассажира,",
                "%d пассажиров,"
              )}{" "}
            </span>
            <span className="header-search__search-filters__passengers-picker__class">
              {" "}
              {isBuisness ? "бизнес" : "эконом"}
            </span>
          </div>
          {this.state.isOpened && (
            <div className="header-search__search-filters__passengers-picker__content">
              <Content
                count={count}
                adults={adults}
                kids={kids}
                toddlers={toddlers}
                isBuisness={isBuisness}
                decrementAdults={this.decrementAdults}
                decrementKids={this.decrementKids}
                decrementToddlers={this.decrementToddlers}
                incrementAdults={this.incrementAdults}
                incrementKids={this.incrementKids}
                incrementToddlers={this.incrementToddlers}
                setBuisness={this.setBuisness}
              />
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default PassengersPicker;

class Content extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <div className="content__wrapper">
          <div className="content__item">
            <div className="content__item__text">Взрослые</div>
            <div className="content__item__button">
              <button
                onClick={this.props.decrementAdults}
                className="content__item__button__decrement"
              >
                -
              </button>
              <div className="content__item__button__count">
                {this.props.adults}
              </div>
              <button
                onClick={this.props.incrementAdults}
                className="content__item__button__increment"
              >
                +
              </button>
            </div>
          </div>
          <div className="content__item">
            <div className="content__item__text">Дети до 12 лет</div>
            <div className="content__item__button">
              {" "}
              <button
                onClick={this.props.decrementKids}
                className="content__item__button__decrement"
              >
                -
              </button>
              <div className="content__item__button__count">
                {this.props.kids}
              </div>
              <button
                onClick={this.props.incrementKids}
                className="content__item__button__increment"
              >
                +
              </button>
            </div>
          </div>
          <div className="content__item">
            <div className="content__item__text">
              Дети до 2 лет
              <p className="content__item__subtext">Без места</p>
            </div>
            <div className="content__item__button">
              {" "}
              <button
                onClick={this.props.decrementToddlers}
                className="content__item__button__decrement"
              >
                -
              </button>
              <div className="content__item__button__count">
                {this.props.toddlers}
              </div>
              <button
                onClick={this.props.incrementToddlers}
                className="content__item__button__increment"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div>
          <Checkbox>
            <div onClick={this.props.setBuisness} style={{ marginTop: 2 }}>
              Бизнес-класс
            </div>
          </Checkbox>
        </div>
      </Fragment>
    );
  }
}
