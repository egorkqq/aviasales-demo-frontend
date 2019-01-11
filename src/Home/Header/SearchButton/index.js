import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SearchButton extends Component {
  gotoSearch = () => {
    this.props.history.push("/search");
  };
  render() {
    return (
      <button onClick={this.gotoSearch} className="header__search-button">
        Найти билеты
      </button>
    );
  }
}

export default withRouter(SearchButton);
