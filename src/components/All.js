import React, { useState, useContext } from 'react';
import { HouseContext } from './HouseContext';

const All = () => {
  const { country, setCountry, countries, price, setPrice, property, setProperty, properties } =
    useContext(HouseContext);

  const allOnClick = () => {
    setCountry('Location (any)');
    setPrice('Price range (any)');
    setProperty('Property type (any)');
  };

  return (
    <div className="dropdown relative">
      <div>
        <button className="dropdown-btn w-full text-justify" onClick={allOnClick}>
          <p className="ml-7">Show All</p>
        </button>
      </div>
    </div>
  );
};

export default All;
