import React, { Component, Fragment } from "react";

import SliderWrapper from "./../SliderWrapper";

class DepartureAndArrivals extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <h6 className="filters__wrapper__mini-title">Москва — Барселона</h6>
        <SliderWrapper
          title={"Вылет из Москвы"}
          min={1519430700}
          max={1519490700}
        />
        <SliderWrapper
          title={"Прибытие в Барселону"}
          min={1519490700}
          max={1519590700}
        />
        <h6 className="filters__wrapper__mini-title">Барселона — Москва</h6>
        <SliderWrapper
          title={"Вылет из Москвы"}
          min={1521430700}
          max={1521490700}
        />
        <SliderWrapper
          title={"Прибытие в Барселону"}
          min={1519990700}
          max={1520290700}
        />
      </Fragment>
    );
  }
}

export default DepartureAndArrivals;
