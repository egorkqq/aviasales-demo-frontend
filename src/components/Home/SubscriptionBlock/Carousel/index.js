import React, { Component } from "react";
import Slider from "react-slick";
import { ag1, ag2, ag3, ag4, ag5 } from "./../content/";
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="subscription__slider">
        <Slider {...settings}>
          <div className="subscription__slider__slide">
            <div className="subscription__slider__slide__wrapper">
              <img
                className="subscription__slider__slide__img"
                src={ag1}
                alt=""
              />
              <img
                className="subscription__slider__slide__img"
                src={ag2}
                alt=""
              />
              <img
                className="subscription__slider__slide__img"
                src={ag3}
                alt=""
              />
              <img
                className="subscription__slider__slide__img"
                src={ag4}
                alt=""
              />
              <img
                className="subscription__slider__slide__img"
                src={ag5}
                alt=""
              />
            </div>
          </div>
          <div className="subscription__slider__slide">
            <div className="subscription__slider__slide__wrapper">
              <img
                className="subscription__slider__slide__img"
                src={ag2}
                alt=""
              />
              <img
                className="subscription__slider__slide__img"
                src={ag1}
                alt=""
              />
              <img
                className="subscription__slider__slide__img"
                src={ag4}
                alt=""
              />
              <img
                className="subscription__slider__slide__img"
                src={ag3}
                alt=""
              />
              <img
                className="subscription__slider__slide__img"
                src={ag5}
                alt=""
              />
            </div>
          </div>
          <div className="subscription__slider__slide">
            <div className="subscription__slider__slide__wrapper">
              <img
                className="subscription__slider__slide__img"
                src={ag3}
                alt=""
              />
              <img
                className="subscription__slider__slide__img"
                src={ag1}
                alt=""
              />
              <img
                className="subscription__slider__slide__img"
                src={ag2}
                alt=""
              />
              <img
                className="subscription__slider__slide__img"
                src={ag5}
                alt=""
              />
              <img
                className="subscription__slider__slide__img"
                src={ag4}
                alt=""
              />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
