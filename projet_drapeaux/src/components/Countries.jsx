import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [sortData, setSortData] = useState([]);
  const [rangeValue, setRangeValue] = useState(30);
  const [selectedRadio, setSelectedRadio] = useState("");

  const radio = ["Africa", "America", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,population,region,capital,flag"
      )
      .then((res) => {
        setData(res.data);
        setSortData(res.data);
        // console.log(res.data);
      });
  }, []);

  return (
    <div className="countries">
      <div className="sort-container">
        <input
          type="range"
          min="1"
          max="250"
          value={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        <ul>
          {radio.map(() => {
            return (
              <li key={radio}>
                <input
                  type="radio"
                  checked={radio === selectedRadio}
                  id={radio}
                  value={radio}
                  onChange={(e) => setSelectedRadio(e.target.value)}
                />
                <label htmlFor={radio}> {radio} </label>
              </li>
            );
          })}
        </ul>
      </div> 
      <div className="countries-liste">
        {sortData
          .filter((country) => country.region.includes(selectedRadio))
          .map((country) => (
            <Card country={country} key={country.name} />
          ))}
      </div>
    </div>
  );
};

export default Countries;
