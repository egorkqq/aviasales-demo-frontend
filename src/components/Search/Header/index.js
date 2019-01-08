import React, { Component } from "react";
import "./styles.sass";
import logo from "./../../Home/Header/Logo/logo.svg";
import SearchFilters from "./SearchFilters";
class Header extends Component {
  state = {};
  render() {
    return (
      <header className="search-header">
        <div className="container">
          <div className="search-header__set-currency">RUB</div>
          <div className="search-header__logo">
            <img
              className="search-header__logo__image"
              src={logo}
              alt="aviasales"
            />
            <span className="search-header__logo__title"> aviasales </span>
          </div>
          <SearchFilters />
        </div>
      </header>
    );
  }
}

export default Header;