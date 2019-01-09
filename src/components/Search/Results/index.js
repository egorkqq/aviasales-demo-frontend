import React, { Component } from "react";
import "./styles.sass";
import Ticket from "./Ticket";
class Results extends Component {
  state = {};
  render() {
    return (
      <section className="results">
        <div className="col-xs-12">
          <Ticket />
        </div>
      </section>
    );
  }
}

export default Results;
