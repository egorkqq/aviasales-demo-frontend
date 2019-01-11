import React from "react";

const DestinationCity = () => {
  return (
    <div className="header__search-filters__destination-city">
      <label>
        <input
          className="header__search-filters__destination-city__input"
          type="text"
          placeholder="Город прибытия"
        />
      </label>
    </div>
  );
};

export default DestinationCity;
