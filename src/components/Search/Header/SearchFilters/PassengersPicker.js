import React from "react";

const PassengersPicker = () => {
  return (
    <div
      style={{ borderBottomRightRadius: 0 }}
      // вот за этот инлайн стиль извиняюсь, потом исправлю
      className="header__search-filters__passengers-picker"
    >
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
