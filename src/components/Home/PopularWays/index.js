import React, { Component } from "react";
import "./styles.sass";
import Categories from "./Categories";
import CityCards from "./CityCards";
class PopularWays extends Component {
  state = { currentCity: "Москва" };
  render() {
    const { currentCity } = this.state;
    return (
      <section className="popular-ways">
        <div className="popular-ways__compass" />
        <div className="container">
          <h2 className=" popular-ways__text">
            Популярные направления перелетов из города{" "}
            <span className="popular-ways__text__current-city">
              {currentCity}{" "}
              <button className="popular-ways__text__current-city__edit" />
            </span>
          </h2>
          <Categories />
          <CityCards />
        </div>
      </section>
    );
  }
}

export default PopularWays;
