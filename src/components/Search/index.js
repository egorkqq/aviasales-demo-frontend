import React, { Fragment } from "react";
import Results from "./Results";
import Filters from "./Filters";
import Header from "./Header";

const Search = () => {
  return (
    <Fragment>
      <Header />
      <div className="search-wrapper">
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
      </div>
    </Fragment>
  );
};

export default Search;
