import React, { Component } from "react";
import "./styles.sass";
import Logo from "./Logo";
import HeaderText from "./HeaderText";
import SearchFilters from "./SearchFilters";
import SearchButton from "./SearchButton";
class Header extends Component {
  state = {};
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Logo alt="Aviasales" />
            </div>
            <div className="header__content-wrapper">
              <HeaderText />
              <div className="col-xs-12">
                <SearchFilters />
              </div>
              <div className="col-xs-12">
                <SearchButton />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
