import React, { Component } from "react";
import "./styles.sass";

class Filter extends Component {
  state = {};
  render() {
    return (
      <section className="filters">
        <div className="center-xs">
          <button className="filters__toggle" />
        </div>
      </section>
    );
  }
}

export default Filter;
