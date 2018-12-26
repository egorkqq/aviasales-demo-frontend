import React, { Component } from "react";
import Carousel from "./Carousel";
import "./styles.sass";
import Follow from "./Follow";
class Subscription extends Component {
  state = {};
  render() {
    return (
      <div className="subscription">
        <h2 className="subscription__text">
          Дешевые авиабилеты от крупнейших авиакомпаний и агентств
        </h2>
        <div className="container">
          <div className="col-xl-offset-1 col-xl-10">
            <Carousel />
          </div>
          <div className="subscription__line" />
          <Follow />
        </div>
      </div>
    );
  }
}

export default Subscription;
