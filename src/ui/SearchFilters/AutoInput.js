import React from "react";
import Autosuggest from "react-autosuggest";

const cities = [
  {
    name: "Москва",
    country: "Россия",
    airport: "MOW"
  },
  {
    name: "Бангкок",
    country: "Тайланд",
    airport: "BKK"
  },
  {
    name: "Барселона",
    country: "Испания",
    airport: "BCN"
  },
  {
    name: "Денпасар Бали",
    country: "Индонезия",
    airport: "DPS"
  },
  {
    name: "Баландино",
    country: "Челябинск",
    airport: "CEK"
  },
  {
    name: "Батуми",
    country: "Грузия",
    airport: "BUS"
  }
];

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : cities.filter(
        city => city.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

const getSuggestionValue = suggestion => suggestion.name + suggestion.airport;

const renderSuggestion = suggestion => (
  <div className="suggestion-content">
    <div className="suggestion-content__city">{suggestion.name},</div>{" "}
    <span className="suggestion-content__country">{suggestion.country}</span>
    <abbr className="suggestion-content__airport" title={suggestion.name}>
      {suggestion.airport}
    </abbr>
  </div>
);

export default class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      suggestions: []
    };
  }

  onChange = (event, obj) => {
    if (
      obj.newValue.slice(-3) === obj.newValue.slice(-3).toUpperCase() &&
      obj.newValue.length >= 4
    ) {
      this.props.updateAirport(obj.newValue.slice(-3));
      this.setState({
        value: obj.newValue.slice(0, -3)
      });
    } else {
      this.setState({
        value: obj.newValue
      });
    }
  };
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: this.props.placeholder,
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}
