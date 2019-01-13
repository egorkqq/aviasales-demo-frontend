import React, { Component, Fragment } from "react";
import "./PassengersPicker.sass";
import pluralize from "pluralize-ru";
import Content from "./PassengersChoose";
class PassengersPicker extends Component {
  state = {
    isOpened: false,
    count: 1,
    adults: 1,
    kids: 0,
    toddlers: 0,
    isBuisness: false
  };
  updateCount = () => {
    this.setState(prevState => {
      const newCount = prevState.adults + prevState.kids + prevState.toddlers;
      return { count: newCount };
    });
  };
  toggle = () => {
    this.setState(prevState => {
      return { isOpened: !prevState.isOpened };
    });
  };
  disableContent = () => {
    this.setState({ isOpened: false });
  };
  decrementAdults = () => {
    this.state.adults > 1 &&
      this.setState(prevState => {
        return { adults: prevState.adults - 1 };
      });
    this.updateCount();
  };
  incrementAdults = () => {
    this.state.count <= 8 &&
      this.setState(prevState => {
        return { adults: prevState.adults + 1 };
      });
    this.updateCount();
  };
  decrementKids = () => {
    this.state.kids > 0 &&
      this.setState(prevState => {
        return { kids: prevState.kids - 1 };
      });
    this.updateCount();
  };
  incrementKids = () => {
    this.state.count <= 8 &&
      this.state.adults >= 1 &&
      this.setState(prevState => {
        return { kids: prevState.kids + 1 };
      });
    this.updateCount();
  };
  decrementToddlers = () => {
    this.state.toddlers > 0 &&
      this.setState(prevState => {
        return { toddlers: prevState.toddlers - 1 };
      });
    this.updateCount();
  };
  incrementToddlers = () => {
    this.state.count <= 8 &&
      this.state.adults >= 1 &&
      this.setState(prevState => {
        return { toddlers: prevState.toddlers + 1 };
      });
    this.updateCount();
  };
  setBuisness = () => {
    this.setState(prevState => {
      return { isBuisness: !prevState.isBuisness };
    });
  };

  render() {
    const { count, adults, kids, toddlers, isBuisness } = this.state;
    return (
      <Fragment>
        <div className="header-search__search-filters__passengers-picker">
          <div
            onClick={this.toggle}
            className="header__search-filters__passengers-picker__input"
            type="text"
          >
            <span className="header-search__search-filters__passengers-picker__counter">
              {pluralize(
                count,
                "нет пассажиров,",
                "%d пассажир,",
                "%d пассажира,",
                "%d пассажиров,"
              )}{" "}
            </span>
            <span className="header-search__search-filters__passengers-picker__class">
              {" "}
              {isBuisness ? "бизнес" : "эконом"}
            </span>
          </div>
          {this.state.isOpened && (
            <div className="header-search__search-filters__passengers-picker__content">
              <Content
                count={count}
                adults={adults}
                kids={kids}
                toddlers={toddlers}
                isBuisness={isBuisness}
                decrementAdults={this.decrementAdults}
                decrementKids={this.decrementKids}
                decrementToddlers={this.decrementToddlers}
                incrementAdults={this.incrementAdults}
                incrementKids={this.incrementKids}
                incrementToddlers={this.incrementToddlers}
                setBuisness={this.setBuisness}
                disableContent={this.disableContent}
              />
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default PassengersPicker;
