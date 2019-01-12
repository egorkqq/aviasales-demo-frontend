import React, { Component } from "react";
import "./SearchInput.sass";
import Example from "./AutoInput";
class FromCity extends Component {
  state = {
    airport: "AIR"
  };

  updateAirport = value => this.setState({ airport: value });

  render() {
    return (
      <div className="header__search-filters__from-city">
        <label>
          <Example placeholder={"Откуда"} updateAirport={this.updateAirport} />
          <span className="header__search-filters__from-city__airport-name">
            {this.state.airport}
          </span>
        </label>
      </div>
    );
  }
}

export default FromCity;
