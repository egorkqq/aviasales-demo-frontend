import React, { Component } from "react";
import { soc1, soc2, soc3, soc4 } from "./../content";
class Follow extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-offset-3 col-md-6">
        <p className="subscription__subtext">
          Хотите знать всё о скидках на авиабилеты?
        </p>
        <p className="subscription__subsubtext">
          Вы можете подписаться на нашу рассылку через соцсети или по
          электронной почте.
        </p>
        <div className="subscription__socials">
          <img src={soc3} alt="" className="subscription__socials__img" />
          <img src={soc2} alt="" className="subscription__socials__img" />
          <img src={soc1} alt="" className="subscription__socials__img" />
          <img src={soc4} alt="" className="subscription__socials__img" />
        </div>
        <form className="subscription__form" action="submit">
          <label className="subscription__form__label">
            <input
              className="subscription__form__input"
              placeholder="Ваш email"
              type="text"
            />
          </label>
          <button className="subscription__form__button">Подписаться</button>
        </form>
      </div>
    );
  }
}

export default Follow;
