import React, { Component, Fragment } from "react";
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
          <div className="filters__wrapper">content</div>
        </section>
      </Fragment>
    );
  }
}

export default Filter;
