import React, { Component } from "react";
import "react-day-picker/lib/style.css";
import "./DatesPicker.sass";

import Template from "./DatesPickerTemplate";
import Calendar from "./Calendar";

class DatesPicker extends Component {
  state = { isOpened: false, from: undefined, to: undefined };
  toggle = () => {
    this.setState(prevState => {
      return { isOpened: !prevState.isOpened };
    });
  };
  updateData = ({ from, to }) => {
    from &&
      to &&
      this.setState({
        from: from.toLocaleDateString(),
        to: to.toLocaleDateString()
      });
    to && this.toggle();
  };
  offCalendar = () => {
    this.setState({ isOpened: false });
  };
  render() {
    return (
      <div
        className={
          this.props.className || "header__search-filters__dates-picker"
        }
      >
        <Template
          onToggleCalendar={this.toggle}
          isOpened={this.state.isOpened}
          placeholder="Туда"
          value={this.state.from}
        />
        <Template
          onToggleCalendar={this.toggle}
          isOpened={this.state.isOpened}
          placeholder="Обратно"
          value={this.state.to}
        />
        {this.state.isOpened && (
          <div className="header__search-filters__dates-picker__wrapper__content">
            <Calendar
              updateData={this.updateData}
              offCalendar={this.offCalendar}
            />
          </div>
        )}
      </div>
    );
  }
}

export default DatesPicker;
