import React, { Component, Fragment } from "react";
import FilterWrapper from "./FilterWrapper";
import Transfers from "./Transfers";
import Aviacompanies from "./Aviacompanies";
import "./styles.sass";
import DepartureAndArrivals from "./DepartureAndArrivals";

class Filter extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="center-xs">
          <button className="filters__toggle" />
        </div>
        <aside className="filters">
          <div className="filters__wrapper">
            <FilterWrapper isOpened title={"Пересадки"}>
              <Transfers />
            </FilterWrapper>
            <FilterWrapper isOpened title={"Время вылета и прибытия"}>
              <DepartureAndArrivals />
            </FilterWrapper>
            <FilterWrapper title={"Багаж"} />
            <FilterWrapper title={"Длительность пересадки"} />
            <FilterWrapper isOpened title={"Авиакомпании"}>
              <Aviacompanies />
            </FilterWrapper>
            <FilterWrapper title={"Время в пути"} />
            <FilterWrapper title={"Аэропорты"} />
            <FilterWrapper title={"Агенства"} />
          </div>
        </aside>
      </Fragment>
    );
  }
}

export default Filter;
