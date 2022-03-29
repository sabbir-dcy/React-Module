import React from "react";
import "./Country.css";

const Country = (props) => {
  const { flags, name, population, area } = props.country;

  return (
    <div className="country">
      <img src={flags.png} alt="" className="flags"/>
      <h2>name: {name.common}</h2>
      <h4>poulation: {population}</h4>
      <p>
        <small>area: {area}</small>
      </p>
    </div>
  );
};

export default Country;
