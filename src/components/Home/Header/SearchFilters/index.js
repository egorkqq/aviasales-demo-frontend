import React, { Component } from "react";
import FromCity from "./FromCity";
import DestinationCity from "./DestinationCity";
import DatesPicker from "./DatesPicker";
import PassengersPicker from "./PassengersPicker";

class SearchFilters extends Component {
  state = {};
  render() {
    return (
      <section className="header__search-filters">
        <FromCity />
        <DestinationCity />
        <DatesPicker />
        <PassengersPicker />
      </section>
    );
  }
}

export default SearchFilters;
