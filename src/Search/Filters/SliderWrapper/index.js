import React, { Component, Fragment } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { format } from "date-fns";
import ru from "date-fns/locale/ru";

const Range = Slider.Range;

class SliderWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: this.props.min,
      max: this.props.max,
      firstValue: this.props.min,
      secondValue: this.props.max
    };
  }
  log = value => {
    this.setState({
      firstValue: value[0],
      secondValue: value[1]
    });
  };

  render() {
    const { min, max, firstValue, secondValue } = this.state;
    const { title } = this.props;
    return (
      <Fragment>
        {title ? (
          <p className="filters__wrapper__departure-text">{title}:</p>
        ) : null}
        <div className="filters__wrapper__departure-wrapper">
          <p className="filters__wrapper__departure-text">
            c{" "}
            {format(firstValue * 1000, "HH:MM[, ] DD MMM", {
              locale: ru
            })}
          </p>
          <p className="filters__wrapper__departure-text">
            до{" "}
            {format(secondValue * 1000, "HH:MM[, ] DD MMM", {
              locale: ru
            })}
          </p>
        </div>
        <div className="filters__wrapper__range-wrapper">
          <Range
            trackStyle={[
              { background: "#00ACDE", height: 2, marginTop: 1 },
              { background: "#00ACDE", height: 2, marginTop: 1 }
            ]}
            handleStyle={[
              { background: "#FFFFFF", border: "1px solid #D6D9DA" },
              { background: "#FFFFFF", border: "1px solid #D6D9DA" }
            ]}
            railStyle={{ height: 2, marginTop: 1 }}
            allowCross={false}
            defaultValue={[min, max]}
            min={min}
            max={max}
            onChange={this.log}
          />
        </div>
      </Fragment>
    );
  }
}

export default SliderWrapper;
