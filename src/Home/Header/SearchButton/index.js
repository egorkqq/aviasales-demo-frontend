import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SearchButton extends Component {
  goSearch = () => {
    this.props.history.push("/search");
  };
  render() {
    return (
      <button onClick={this.goSearch} className="header__search-button">
        Найти билеты
      </button>
    );
  }
}

export default withRouter(SearchButton);
