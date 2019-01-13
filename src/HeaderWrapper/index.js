import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './styles.sass';
import PropTypes from 'prop-types';
import Logo from './Logo';
import HeaderText from './HeaderText';
import SearchFilters from '../ui/SearchFilters';
import SearchButton from './SearchButton';

class Header extends Component {
  state = {};

  render() {
    const { location } = this.props;
    const homePage = location.pathname === '/';
    const headerWidth = homePage ? 'header' : 'header killer';
    return (
      <header className={headerWidth}>
        {homePage && (
          <div className="tip">
            Для проверки поля ввода введите б. Для перехода на страницу поиска нажмите кнопку Найти
            билеты
          </div>
        )}
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="search-header__wrapper">
                {!homePage ? <div className="search-header__set-currency">RUB</div> : null}
                <div className="header__logo-wrapper">
                  <Logo />
                </div>
              </div>
            </div>
            {homePage ? <HeaderText /> : null}
            {homePage ? (
              <div className="col-xs-12 col-md-offset-1 col-md-10">
                <SearchFilters />
              </div>
            ) : (
              <div className="col-xs-12">
                <SearchFilters />
              </div>
            )}

            {homePage ? <SearchButton /> : null}
          </div>
        </div>
      </header>
    );
  }
}
Header.propTypes = {
  location: PropTypes.shape,
};
Header.defaultProps = {
  location: {},
};
export default withRouter(Header);
