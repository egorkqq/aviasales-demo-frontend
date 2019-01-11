import React, { Fragment } from "react";
import Results from "./Results";
import Filters from "./Filters";
import Header from "./Header";
import { Helmet } from "react-helmet";
const Search = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Aviasales: Поиск</title>
      </Helmet>
      <Header />
      <main className="search-wrapper">
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
    </Fragment>
  );
};

export default Search;
