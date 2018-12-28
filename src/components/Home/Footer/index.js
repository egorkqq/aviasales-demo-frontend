import React, { Component } from "react";

import "./styles.sass";

import FooterCards from "./FooterCards";
import FooterMenu from "./FooterMenu";
import MobileApp from "./MobileApp";
export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <MobileApp />
        <div className="container">
          <FooterCards />
          <FooterMenu />
        </div>
      </footer>
    );
  }
}
