import React, { Component, Fragment } from "react";
import FilterWrapper from "./FilterWrapper";
import "./styles.sass";

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
            <FilterWrapper title={"Трансфер"}>
              контент \n контентыч аазазвы азфыфвыывфы
            </FilterWrapper>
            <FilterWrapper title={"Трансфер"}>
              контент \n контентыч аазазвы азфыфвыывфы
            </FilterWrapper>
            <FilterWrapper isOpened title={"Трансфер"}>
              контент \n контентыч аазазвы азфыфвыывфы
            </FilterWrapper>
            <FilterWrapper title={"Трансфер"}>
              контент \n контентыч аазазвы азфыфвыывфы
            </FilterWrapper>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Filter;
