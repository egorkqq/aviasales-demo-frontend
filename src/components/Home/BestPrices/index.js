import React, { Component } from "react";
import "./styles.sass";
import DealCards from "./DealCards";

class BestPrices extends Component {
  state = {};
  render() {
    return (
      <section className="best-prices">
        <div className="best-prices__calendar" />
        <div className="container">
          <h2 className="best-prices__text">
            Лучшие цены на авиабилеты за последний месяц
          </h2>
          <DealCards />
          <h4 className="best-prices__sub-text">
            Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
            стран мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и
            728 авиакомпаний.
          </h4>
          <p className="best-prices__disclaimer">
            Цены, найденные пользователями за последние 48 часов, не являются
            офертой.
          </p>
        </div>
      </section>
    );
  }
}

export default BestPrices;
