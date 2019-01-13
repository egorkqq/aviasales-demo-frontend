import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";

import DayPicker, { DateUtils } from "react-day-picker";

const WEEKDAYS_SHORT = {
  ru: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
};
const MONTHS = {
  ru: [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
  ]
};

const WEEKDAYS_LONG = {
  ru: [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота"
  ]
};

const FIRST_DAY_OF_WEEK = {
  ru: 1
};

const LABELS = {
  ru: { nextMonth: "следующий месяц", previousMonth: "предыдущий месяц" }
};

class Calendar extends Component {
  static defaultProps = {
    numberOfMonths: 1
  };
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
  }
  getInitialState() {
    return {
      from: undefined,
      to: undefined,
      locale: "ru"
    };
  }
  handleDayClick(day, modifiers = {}) {
    if (modifiers.disabled) {
      return;
    }
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
    this.props.updateData(range);
  }
  handleResetClick() {
    this.setState(this.getInitialState());
  }
  handleClickOutside = evt => {
    this.props.offCalendar();
  };
  render() {
    const { from, to, locale } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <div className="RangeExample">
        <DayPicker
          locale={locale}
          months={MONTHS[locale]}
          weekdaysLong={WEEKDAYS_LONG[locale]}
          weekdaysShort={WEEKDAYS_SHORT[locale]}
          firstDayOfWeek={FIRST_DAY_OF_WEEK[locale]}
          labels={LABELS[locale]}
          className="Selectable"
          numberOfMonths={this.props.numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
          disabledDays={[
            {
              after: new Date(0),
              before: new Date()
            }
          ]}
        />
        <div className="checkbox-wrapper">
          <label className="checkbox-label">
            <input type="checkbox" className="checkbox-hidden" value="on" />
            <p className="checkbox-text">Показать цены в одну сторону</p>
          </label>
        </div>
      </div>
    );
  }
}

export default onClickOutside(Calendar);
