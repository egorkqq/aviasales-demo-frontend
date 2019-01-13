import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import "flexboxgrid2";
import PopularWays from "./PopularWays";
import BestPrices from "./BestPrices";
import SpecialOffers from "./SpecialOffers";
import Articles from "./Articles";
import Subscription from "./SubscriptionBlock";

class Home extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Aviasales: Главная</title>
        </Helmet>

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
