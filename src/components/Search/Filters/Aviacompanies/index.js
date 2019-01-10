import React, { Component, Fragment } from "react";
import Checkbox from "./../Checkbox";

class Aviacompanies extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="filters__wrapper__checkbox">
          <Checkbox>Несколько авиакомпаний</Checkbox>
        </div>
        <p className="filters__wrapper__sub-text">
          Показывать билеты с перелетами, выполняемыми несколькими
          авиакомпаниями, включая выбранную
        </p>
        <h6 className="filters__wrapper__mini-title">Альянсы</h6>
        <div className="filters__wrapper__checkbox">
          <Checkbox>Все</Checkbox>
        </div>
        <div className="filters__wrapper__checkbox">
          <Checkbox>Star Alliance</Checkbox>
          <div className="filters__wrapper__checkbox__price">12 712 ₽</div>
        </div>
        <div className="filters__wrapper__checkbox">
          <Checkbox>OneWorld</Checkbox>
          <div className="filters__wrapper__checkbox__price">13 712 ₽</div>
        </div>
        <div className="filters__wrapper__checkbox">
          <Checkbox>SkyTeam</Checkbox>
          <div className="filters__wrapper__checkbox__price">17 215 ₽</div>
        </div>
        <h6 className="filters__wrapper__mini-title">Авиакомпании</h6>
        <div className="filters__wrapper__checkbox">
          <Checkbox>Все</Checkbox>
        </div>
        <div className="filters__wrapper__checkbox">
          <Checkbox>Utair</Checkbox>
          <div className="filters__wrapper__checkbox__price">12 712 ₽</div>
        </div>
        <div className="filters__wrapper__checkbox">
          <Checkbox>Аэрофлот</Checkbox>
          <div className="filters__wrapper__checkbox__price">13 712 ₽</div>
        </div>
        <div className="filters__wrapper__checkbox">
          <Checkbox>Turkish Airlines</Checkbox>
          <div className="filters__wrapper__checkbox__price">17 215 ₽</div>
        </div>
        <div className="filters__wrapper__checkbox">
          <Checkbox>Emirates</Checkbox>
          <div className="filters__wrapper__checkbox__price">12 712 ₽</div>
        </div>
        <div className="filters__wrapper__checkbox">
          <Checkbox>Qatar Airlines</Checkbox>
          <div className="filters__wrapper__checkbox__price">13 712 ₽</div>
        </div>
        <div className="filters__wrapper__checkbox">
          <Checkbox>Победа</Checkbox>
          <div className="filters__wrapper__checkbox__price">17 215 ₽</div>
        </div>
        <div className="filters__wrapper__checkbox">
          <Checkbox>Оренбургские авиалинии авиалинии</Checkbox>
          <div className="filters__wrapper__checkbox__price">12 712 ₽</div>
        </div>
        <div className="filters__wrapper__checkbox">
          <Checkbox>OneWorld</Checkbox>
          <div className="filters__wrapper__checkbox__price">13 712 ₽</div>
        </div>
        <div className="filters__wrapper__checkbox">
          <Checkbox>SkyTeam</Checkbox>
          <div className="filters__wrapper__checkbox__price">17 215 ₽</div>
        </div>
      </Fragment>
    );
  }
}

export default Aviacompanies;
