import React from "react";

const FromCity = () => {
  return (
    <div className="header__search-filters__from-city">
      <label>
        <input
          type="text"
          className="header__search-filters__from-city__input"
          value="Москва"
          readOnly
        />
        <span className="header__search-filters__from-city__airport-name">
          MOW
        </span>
      </label>
    </div>
  );
};

export default FromCity;
