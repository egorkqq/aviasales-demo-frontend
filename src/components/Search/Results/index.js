import React, { Component } from "react";
import "./styles.sass";
import Ticket from "./Ticket";
import tickets from "./tickets";
class Results extends Component {
  state = {};
  render() {
    return (
      <section className="results">
        <div className="col-md-12 col-xl-offset-3 col-xl-7">
          {tickets.map((el, index) => {
            return <Ticket data={el} key={index} />;
          })}
          <button className="results__more-tickets">
            Показать еще 10 билетов!
          </button>
        </div>
      </section>
    );
  }
}

export default Results;
