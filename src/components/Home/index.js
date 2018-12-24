import React, { Component, Fragment } from "react";
import Header from "./Header";
import "flexboxgrid2";
import PopularWays from "./PopularWays";
class Home extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <PopularWays />
        </main>
      </Fragment>
    );
  }
}

export default Home;
