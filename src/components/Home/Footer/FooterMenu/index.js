import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  fb,
  ig,
  twi,
  viber,
  vk,
  appleStore,
  windowsStore,
  playStore
} from "../content";
class FooterMenu extends Component {
  state = {};
  render() {
    return (
      <div className="footer__menu">
        <div className="footer_wrapper">
          <div className="footer__menu__links">
            <Link className="footer__menu__links__link" to="/">
              О компании
            </Link>
            <Link className="footer__menu__links__link" to="/">
              Партнёрская программа
            </Link>
            <Link className="footer__menu__links__link" to="/">
              Реклама
            </Link>
            <Link className="footer__menu__links__link" to="/">
              Вакансии
            </Link>
            <Link className="footer__menu__links__link" to="/">
              Помощь
            </Link>
            <Link className="footer__menu__links__link" to="/">
              Правила
            </Link>
            <Link className="footer__menu__links__link" to="/">
              White Label авиабилеты
            </Link>
          </div>

          <div className="footer__menu__socials">
            <Link className="footer__menu__socials__link" to="/">
              <img
                className="footer__menu__socials__link__image"
                src={vk}
                alt=""
              />
              Вконтакте
            </Link>
            <Link className="footer__menu__socials__link" to="/">
              <img
                className="footer__menu__socials__link__image"
                src={fb}
                alt=""
              />
              Фейсбук
            </Link>
            <Link className="footer__menu__socials__link" to="/">
              <img
                className="footer__menu__socials__link__image"
                src={ig}
                alt=""
              />
              Инстаграм
            </Link>
            <Link className="footer__menu__socials__link" to="/">
              <img
                className="footer__menu__socials__link__image"
                src={twi}
                alt=""
              />
              Твиттер
            </Link>
            <Link className="footer__menu__socials__link" to="/">
              <img
                className="footer__menu__socials__link__image"
                src={viber}
                alt=""
              />
              Вайбер
            </Link>
          </div>
          <p className="footer__menu__text">Поиск и бронирование отелей</p>
        </div>
        <div className="footer_wrapper">
          <div className="footer__menu__buttons">
            <img
              className="footer__menu__buttons__button"
              src={appleStore}
              alt=""
            />
            <img
              className="footer__menu__buttons__button"
              src={playStore}
              alt=""
            />
            <img
              className="footer__menu__buttons__button"
              src={windowsStore}
              alt=""
            />
          </div>
          <p className="footer__menu__text">
            © 2007–2018, Aviasales — дешевые авиабилеты
          </p>
        </div>
      </div>
    );
  }
}

export default FooterMenu;
