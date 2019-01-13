import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./styles.sass";
import Logo from "./Logo";
import HeaderText from "./HeaderText";
import SearchFilters from "./../ui/SearchFilters";
import SearchButton from "./SearchButton";

class Header extends Component {
  state = {};
  render() {
    const homePage = this.props.location.pathname === "/";
    const headerWidth = homePage ? "header" : "header killer";
    return (
      <header className={headerWidth}>
        {homePage && (
          <div className="tip">
            Для проверки поля ввода введите "б", для перехода на страницу поиска
            нажмите кнопку "Найти билеты"
          </div>
        )}
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="search-header__wrapper">
                {!homePage ? (
                  <div className="search-header__set-currency">RUB</div>
                ) : null}
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
  // return (
  //   <header className="search-header">
  //     <div className="container">
  //       <div className="row">
  //         <div className="col-md-12">
  //           <div className="search-header__wrapper">
  //             <div className="search-header__set-currency">RUB</div>
  //             <Logo />
  //             <SearchFilters className="header__search-filters modifier" />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </header>
  // );
}

export default withRouter(Header);
