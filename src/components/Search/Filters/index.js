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
        <section className="filters">
          <div className="filters__wrapper">
            <FilterWrapper title={"Пересадки"}>
              <Transfers />
            </FilterWrapper>
            <FilterWrapper isOpened title={"Время вылета и прибытия"}>
              <DepartureAndArrivals />
            </FilterWrapper>
            <FilterWrapper isOpened title={"Авиакомпании"}>
              <Aviacompanies />
            </FilterWrapper>
            <FilterWrapper title={"Аэропорты"} />
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Filter;
