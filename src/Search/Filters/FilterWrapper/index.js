import React, { Component } from "react";
import arrow from "./../../Results/Ticket/arrow.svg";
class FilterWrapper extends Component {
  state = { isOpened: this.props.isOpened };

  handleFilter = () => {
    this.setState(prevState => {
      return { isOpened: !prevState.isOpened };
    });
  };

  render() {
    const { title, children } = this.props;
    const showContent = this.state.isOpened
      ? "filters__filter__content"
      : "filters__filter__content hide";
    const reverseArrow = this.state.isOpened
      ? "filters__filter__title__icon"
      : "filters__filter__title__icon closed";
    return (
      <div className="filters__filter">
        <div onClick={this.handleFilter} className="filters__filter__title">
          <img src={arrow} alt="" className={reverseArrow} />
          {title}
        </div>
        <div className={showContent}>{children}</div>
      </div>
    );
  }
}

export default FilterWrapper;
