import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";
import Checkbox from "../../Search/Filters/Checkbox";
class PassengersChoose extends Component {
  state = {};
  handleClickOutside = evt => {
    this.props.disableContent();
  };
  render() {
    return (
      <div>
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
        <div onClick={this.props.setBuisness}>
          <Checkbox>
            <div onClick={this.props.setBuisness} style={{ marginTop: 2 }}>
              Бизнес-класс
            </div>
          </Checkbox>
        </div>
      </div>
    );
  }
}

export default onClickOutside(PassengersChoose);
