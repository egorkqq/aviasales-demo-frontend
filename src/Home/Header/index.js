import React, { Component } from "react";
import "./styles.sass";
import Logo from "./Logo";
import HeaderText from "./HeaderText";
import SearchFilters from "./../../ui/SearchFilters";
import SearchButton from "./SearchButton";
class Header extends Component {
  state = {};
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="header__logo-wrapper">
                <Logo alt="Aviasales" />{" "}
                <span className="header__company-name">aviasales</span>
              </div>
            </div>

            <HeaderText />
            <div className="col-xs-12 col-md-offset-1 col-md-10">
              <SearchFilters />
            </div>

            <SearchButton />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
