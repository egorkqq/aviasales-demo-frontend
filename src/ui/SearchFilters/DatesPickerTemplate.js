import React, { Component } from 'react';

class Template extends Component {
  state = { value: '' };

  componentWillReceiveProps = (nextProps) => {
    this.setState({ value: nextProps.value });
  };

  enterManually = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { onToggleCalendar, placeholder } = this.props;
    const { value } = this.state;
    return (
      <div
        onKeyPress={onToggleCalendar}
        onClick={onToggleCalendar}
        className="header__search-filters__dates-picker__wrapper"
        role="presentation"
      >
        <label htmlFor="dates-picker">
          <input
            id="dates-picker"
            className="header__search-filters__dates-picker__wrapper__input"
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={this.enterManually}
          />
        </label>
      </div>
    );
  }
}

export default Template;
