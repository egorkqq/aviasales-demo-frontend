import React from "react";

const PassengersPicker = () => {
  return (
    <div className="header__search-filters__passengers-picker">
      <label>
        <input
          className="header__search-filters__passengers-picker__input"
          type="text"
          placeholder="1 пассажир, эконом"
        />
      </label>
    </div>
  );
};

export default PassengersPicker;
