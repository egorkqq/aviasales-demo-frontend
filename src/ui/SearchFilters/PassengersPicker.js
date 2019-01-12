import React, { Component, Fragment } from "react";
import "./PassengersPicker.sass";
import Checkbox from "./../../Search/Filters/Checkbox";
class PassengersPicker extends Component {
  state = {
    isOpened: false
  };
  toggle = () => {
    this.setState(prevState => {
      return { isOpened: !prevState.isOpened };
    });
  };
  render() {
    return (
      <div className="header-search__search-filters__passengers-picker">
        <label onClick={this.toggle}>
          <div
            className="header__search-filters__passengers-picker__input"
            type="text"
          >
            <span className="header-search__search-filters__passengers-picker__counter">
              1 пассажир,{" "}
            </span>
            <span className="header-search__search-filters__passengers-picker__class">
              {" "}
              эконом
            </span>
          </div>
        </label>
        {this.state.isOpened && (
          <div className="header-search__search-filters__passengers-picker__content">
            <Content />
          </div>
        )}
      </div>
    );
  }
}

export default PassengersPicker;
//переработать чекбокс сам, сделать на выход проп чвекед или нет добавить все кантеры все чекеды в стейт верхнего компонента
class Content extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="content__wrapper">
          <div className="content__item">
            <div className="content__item__text">Взрослые</div>
            <div className="content__item__button">
              {" "}
              <button className="content__item__button__decrement">-</button>
              <div className="content__item__button__count">0</div>
              <button className="content__item__button__increment">+</button>
            </div>
          </div>
          <div className="content__item">
            <div className="content__item__text">Дети до 12 лет</div>
            <div className="content__item__button">
              {" "}
              <button className="content__item__button__decrement">-</button>
              <div className="content__item__button__count">0</div>
              <button className="content__item__button__increment">+</button>
            </div>
          </div>
          <div className="content__item">
            <div className="content__item__text">
              Дети до 2 лет
              <p className="content__item__subtext">Без места</p>
            </div>
            <div className="content__item__button">
              {" "}
              <button className="content__item__button__decrement">-</button>
              <div className="content__item__button__count">0</div>
              <button className="content__item__button__increment">+</button>
            </div>
          </div>
        </div>
        <div>
          <Checkbox>
            <div style={{ marginTop: 2 }}>Бизнес-класс</div>
          </Checkbox>
        </div>
      </Fragment>
    );
  }
}
