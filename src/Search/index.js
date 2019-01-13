import React, { Fragment } from "react";
import Results from "./Results";
import Filters from "./Filters";
import { Helmet } from "react-helmet";
const Search = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Aviasales: Поиск</title>
      </Helmet>
      <main className="hidden-xs search-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-xl-3">
              <Filters />
            </div>
            <div className="col-md-12 col-xl-7">
              <Results />
            </div>
          </div>
        </div>
      </main>
      <main className="warning-mobile">
        Данная страница имеет верстку только для устройств с шириной экрана
        более 768px. Попробуйте перевернуть ваш девайс :)
      </main>
    </Fragment>
  );
};

export default Search;
