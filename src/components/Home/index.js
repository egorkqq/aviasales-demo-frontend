import React, { Component, Fragment } from "react";
import Header from "./Header";
import "flexboxgrid2";
import PopularWays from "./PopularWays";
import BestPrices from "./BestPrices";
import SpecialOffers from "./SpecialOffers";
import Articles from "./Articles";
import Footer from "./Footer";

class Home extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <PopularWays />
          <BestPrices />
          <SpecialOffers />
          <Articles />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
