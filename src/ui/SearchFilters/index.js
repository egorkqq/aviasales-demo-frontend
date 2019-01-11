import React, { Component } from "react";
import FromCity from "./FromCity";
import DestinationCity from "./DestinationCity";
import DatesPicker from "./DatesPicker";
import PassengersPicker from "./PassengersPicker";
import SearchButton from "./../SearchButton";
import { withRouter } from "react-router-dom";

class SearchFilters extends Component {
  state = {};
  render() {
    const fixer =
      this.props.location.pathname === "/search"
        ? "header__search-filters__dates-picker fixer"
        : "header__search-filters__dates-picker";
    return (
      <section className={this.props.className || "header__search-filters"}>
        <div className="header__search-filters__wrapper-top">
          <FromCity />
          <DestinationCity />
        </div>
        <div className="header__search-filters__wrapper-top">
          <DatesPicker className={fixer} />
          <PassengersPicker />
          {console.log(this.props.location.pathname === "/search")}
          {this.props.location.pathname === "/search" ? <SearchButton /> : null}
        </div>
      </section>
    );
  }
}

export default withRouter(SearchFilters);
