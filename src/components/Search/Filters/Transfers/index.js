import React, { Component, Fragment } from "react";
import Checkbox from "./../Checkbox";

class Transfers extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="filters__wrapper__checkbox">
          <Checkbox>Все</Checkbox>
        </div>
        <div className="filters__wrapper__checkbox">
          <Checkbox>Без пересадок</Checkbox>
          <div className="filters__wrapper__checkbox__price">7 712 ₽</div>
        </div>
        <div className="filters__wrapper__checkbox">
          <Checkbox>1 пересадка</Checkbox>
          <div className="filters__wrapper__checkbox__price">12 712 ₽</div>
        </div>
        <div className="filters__wrapper__checkbox">
          <Checkbox>2 пересадки</Checkbox>
          <div className="filters__wrapper__checkbox__price">13 712 ₽</div>
        </div>
        <div className="filters__wrapper__checkbox">
          <Checkbox>3 пересадки</Checkbox>
          <div className="filters__wrapper__checkbox__price">17 215 ₽</div>
        </div>
      </Fragment>
    );
  }
}

export default Transfers;
