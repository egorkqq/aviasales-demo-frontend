import React, { Component, Fragment } from "react";
import Header from "./Header";
import "flexboxgrid2";
import PopularWays from "./PopularWays";
import BestPrices from "./BestPrices";
import SpecialOffers from "./SpecialOffers";
import Articles from "./Articles";
import Footer from "./Footer";
import Subscription from "./SubscriptionBlock";

class Home extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <PopularWays />
          <BestPrices />
          <Subscription />
          <SpecialOffers />
          <Articles />
        </main>
      </Fragment>
    );
  }
}

export default Home;
