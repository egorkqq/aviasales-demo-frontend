import React from "react";

const Template = ({ placeholder }) => {
  return (
    <div className="header__search-filters__dates-picker__wrapper">
      <label>
        <input
          className="header__search-filters__dates-picker__wrapper__input"
          type="text"
          placeholder={`${placeholder}`}
        />
      </label>
    </div>
  );
};

const DatesPicker = ({ className }) => {
  return (
    <div className={className || "header__search-filters__dates-picker"}>
      <Template placeholder="Туда" />
      <Template placeholder="Обратно" />
    </div>
  );
};

export default DatesPicker;
