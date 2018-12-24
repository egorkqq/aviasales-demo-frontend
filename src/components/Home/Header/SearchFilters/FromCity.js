import React from "react";

const FromCity = () => {
  return (
    <label>
      <div className="header__search-filters__from-city">
        <input
          type="text"
          className="header__search-filters__from-city__input"
          value="Москва"
        />
        <span className="header__search-filters__from-city__airport-name">
          MOW
        </span>
      </div>
    </label>
  );
};

export default FromCity;
