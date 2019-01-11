import React, { Component } from "react";
import "./checkbox.sass";
class Checkbox extends Component {
  state = { checked: this.props.checked };
  toggleCheckbox = () => {
    this.setState(prevState => {
      return { checked: !prevState.checked };
    });
  };
  render() {
    return (
      <label className="wrapper">
        <div className="content">{this.props.children}</div>
        <input type="checkbox" onClick={this.toggleCheckbox} />
        <span className="checkmark" />
      </label>
    );
  }
}

export default Checkbox;
