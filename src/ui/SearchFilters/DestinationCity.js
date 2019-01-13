import React from "react";
import Example from "./AutoInput";

const DestinationCity = () => {
  return (
    <div className="header__search-filters__destination-city">
      <label>
        <Example placeholder={"Куда"} updateAirport={() => {}} />
      </label>
    </div>
  );
};

export default DestinationCity;
