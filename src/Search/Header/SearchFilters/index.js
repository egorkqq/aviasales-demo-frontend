import React, { Component } from "react";
import FromCity from "./FromCity";
import DestinationCity from "./DestinationCity";
import DatesPicker from "./DatesPicker";
import PassengersPicker from "./PassengersPicker";
import SearchButton from "./SearchButton";
class SearchFilters extends Component {
  state = {};
  render() {
    return (
      <section className={this.props.className || "header__search-filters"}>
        <div className="header__search-filters__wrapper-top">
          <FromCity />
          <DestinationCity />
        </div>
        <div className="header__search-filters__wrapper-top">
          <DatesPicker className="header__search-filters__dates-picker fixer" />
          <PassengersPicker />
          <SearchButton />
        </div>
      </section>
    );
  }
}

export default SearchFilters;
