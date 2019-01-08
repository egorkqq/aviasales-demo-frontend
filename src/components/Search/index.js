import React, { Fragment } from "react";
import Results from "./Results";
import Filters from "./Filters";
import Header from "./Header";

const Search = () => {
  return (
    <Fragment>
      <Header />
      <Filters />
      <Results />
    </Fragment>
  );
};

export default Search;
