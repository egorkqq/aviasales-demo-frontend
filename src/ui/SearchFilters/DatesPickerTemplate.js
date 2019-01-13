import React, { Component } from "react";
class Template extends Component {
  state = { value: "" };
  componentWillReceiveProps = nextProps => {
    this.setState({ value: nextProps.value });
  };
  enterManually = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div
        onClick={this.props.onToggleCalendar}
        className="header__search-filters__dates-picker__wrapper"
      >
        <label>
          <input
            className="header__search-filters__dates-picker__wrapper__input"
            type="text"
            placeholder={this.props.placeholder}
            value={this.state.value}
            onChange={this.enterManually}
          />
        </label>
      </div>
    );
  }
}

export default Template;
