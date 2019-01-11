import React, { Component } from "react";
import "./styles.sass";
import logo from "./../../Home/Header/Logo/logo.svg";
import SearchFilters from "./../../ui/SearchFilters";
import { Link } from "react-router-dom";
class Header extends Component {
  state = {};
  render() {
    return (
      <header className="search-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="search-header__wrapper">
                <div className="search-header__set-currency">RUB</div>
                <Link to="/" className="search-header__logo">
                  <img
                    className="search-header__logo__image"
                    src={logo}
                    alt="aviasales"
                  />
                  <span className="search-header__logo__title">
                    {" "}
                    aviasales{" "}
                  </span>
                </Link>
                <SearchFilters className="header__search-filters modifier" />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
