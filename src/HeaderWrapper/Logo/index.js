import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";

export default function Logo(props) {
  return (
    <Link to="/" className="search-header__logo">
      <img className="search-header__logo__image" src={logo} alt="aviasales" />
      <span className="header__company-name"> aviasales </span>
    </Link>
  );
}
