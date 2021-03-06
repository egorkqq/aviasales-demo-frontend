import React, { Component } from "react";
import "./styles.sass";
import Ticket from "./Ticket";
import tickets from "./tickets";
class Results extends Component {
  state = {};
  render() {
    return (
      <section className="results">
        <ul className="results__tickets">
          {tickets.map((el, index) => {
            return <Ticket data={el} key={index} />;
          })}
        </ul>
        <button className="results__more-tickets">
          Показать еще 10 билетов!
        </button>
      </section>
    );
  }
}

export default Results;
