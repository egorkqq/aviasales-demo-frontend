import React from "react";
import { Link } from "react-router-dom";
import rating from "./../content/raiting.svg";
import apple from "./../content/apple.svg";
import andro from "./../content/andro.svg";
import wf from "./../content/wf.svg";
import iphonePic from "./../content/backgroundImage@2x.png";
import { withRouter } from "react-router-dom";

const MobileApp = ({ location }) => {
  console.table(location);
  if (location.pathname === "/search") return null;
  return (
    <div className="footer__mobile-app-bg">
      <div className="footer__mobile-app">
        <img
          className="footer__mobile-app__iphone-pic"
          src={iphonePic}
          alt=""
        />
        <div className="container">
          <div className="col-xl-offset-1 col-xl-10 col-xl-offset-1">
            <h2 className="footer__mobile-app__text">
              Скачай мобильное приложение Aviasales.ru
            </h2>
            <p className="footer__mobile-app__rating">
              <img src={rating} alt="" /> Более 103 000 оценок
            </p>
            <div className="footer__mobile-app__links">
              <Link to="/" className="footer__mobile-app__links__link">
                <img
                  className="footer__mobile-app__links__link__img"
                  src={apple}
                  alt=""
                />{" "}
                iPhone или iPad
              </Link>
              <Link to="/" className="footer__mobile-app__links__link">
                <img
                  className="footer__mobile-app__links__link__img"
                  src={andro}
                  alt=""
                />{" "}
                Android
              </Link>
              <Link to="/" className="footer__mobile-app__links__link">
                <img
                  className="footer__mobile-app__links__link__img"
                  src={wf}
                  alt=""
                />{" "}
                Windows Phone
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MobileApp);
