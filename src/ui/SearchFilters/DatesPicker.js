import React, { Component } from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import "./DatesPicker.sass";
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
// Translate aria-labels
const LABELS = {
  ru: { nextMonth: "следующий месяц", previousMonth: "предыдущий месяц" }
};

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

class DatesPicker extends React.Component {
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
            <Example updateData={this.updateData} />
          </div>
        )}
      </div>
    );
  }
}

class Example extends React.Component {
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

export default DatesPicker;
